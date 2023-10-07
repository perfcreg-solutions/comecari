import { ComponentType, useEffect, FC } from 'react';
import Router from 'next/router';
import { useAuth } from 'contexts';
import { withEmailVerificationRequired } from './withEmailVerificationRequired';
import { Frontend_Routes } from '@fest/shared';

/**
 * A HOC requiring join or create organization for a user.
 */
export const withOrganizationRequired = <P extends object>(
  Component: ComponentType<P>
): FC<P> => {
    const { authUser, isAuthLoading } = useAuth();

    useEffect(() => {
      if (isAuthLoading) return;
      if (!authUser?.currentOrganization) {
        Router.push(Frontend_Routes.GET_STARTED_ORGANIZATION);
        return;
      }
    }, [isAuthLoading, authUser?.currentOrganization]);

    return authUser?.currentOrganization ? <Component {...props} /> : null;
};
