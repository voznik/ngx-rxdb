import type {
  MangoQuery,
  RxCollectionCreator,
  RxDatabaseCreator,
  SyncOptions,
} from 'rxdb/plugins/core';
import { AnyObject } from './types';

export interface NgxRxdbCollectionConfig extends Partial<RxCollectionCreator> {
  schema?: RxCollectionCreator['schema'];
  options?: {
    syncOptions?: SyncOptions & { queryObj?: MangoQuery<any> };
    schemaUrl?: string;
    initialDocs?: AnyObject[];
    recreate?: boolean;
  };
}

export interface NgxRxdbConfig extends RxDatabaseCreator {
  options?: {
    schemas?: Record<string, NgxRxdbCollectionConfig>;
    dumpPath?: string;
  };
}

export const RXDB_DEFAULT_ADAPTER = 'idb';
export const RXDB_DEFAULT_CONFIG: NgxRxdbConfig = {
  name: 'ngx',
  adapter: RXDB_DEFAULT_ADAPTER,
  multiInstance: true,
  ignoreDuplicate: false,
  pouchSettings: {
    skip_setup: true,
    ajax: {
      withCredentials: false,
      cache: false,
      timeout: 10000,
      headers: {},
    },
  },
};
export const DEFAULT_BACKOFF_FN = delay => (delay === 0 ? 2000 : delay * 3);
