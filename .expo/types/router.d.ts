/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/resumes/create` | `/resumes/create`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/resumes` | `/resumes`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/resumes/[id]/create-podcast` | `/resumes/[id]/create-podcast`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `${'/(main)'}/resumes/[id]` | `/resumes/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/resumes/create` | `/resumes/create`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/resumes` | `/resumes`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/resumes/[id]/create-podcast` | `/resumes/[id]/create-podcast`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `${'/(main)'}/resumes/[id]` | `/resumes/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/register${`?${string}` | `#${string}` | ''}` | `/register${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(main)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/resumes/create${`?${string}` | `#${string}` | ''}` | `/resumes/create${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/resumes${`?${string}` | `#${string}` | ''}` | `/resumes${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/resumes/create` | `/resumes/create`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/resumes` | `/resumes`; params?: Router.UnknownInputParams; } | `${'/(main)'}/resumes/${Router.SingleRoutePart<T>}/create-podcast` | `/resumes/${Router.SingleRoutePart<T>}/create-podcast` | `${'/(main)'}/resumes/${Router.SingleRoutePart<T>}` | `/resumes/${Router.SingleRoutePart<T>}` | { pathname: `${'/(main)'}/resumes/[id]/create-podcast` | `/resumes/[id]/create-podcast`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `${'/(main)'}/resumes/[id]` | `/resumes/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
