import { RouteMeta } from 'vue-router';
declare module 'vue-router' {
    interface _RouteRecordBase {
        hidden?: boolean;
    }

    interface _RouteLocationBase {
        hidden?: boolean;
    }

    interface RouteRecordNormalized {
        hidden?: boolean;
    }

    interface RouteMeta {
        title?: string;
        isAdmin?: boolean;
        requiresAuth?: boolean;
    }
}