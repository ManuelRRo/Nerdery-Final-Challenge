
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model UserRoles
 * 
 */
export type UserRoles = $Result.DefaultSelection<Prisma.$UserRolesPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Brands
 * 
 */
export type Brands = $Result.DefaultSelection<Prisma.$BrandsPayload>
/**
 * Model Variants
 * 
 */
export type Variants = $Result.DefaultSelection<Prisma.$VariantsPayload>
/**
 * Model Files
 * 
 */
export type Files = $Result.DefaultSelection<Prisma.$FilesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model ProductCategories
 * 
 */
export type ProductCategories = $Result.DefaultSelection<Prisma.$ProductCategoriesPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model CartDetails
 * 
 */
export type CartDetails = $Result.DefaultSelection<Prisma.$CartDetailsPayload>
/**
 * Model Carts
 * 
 */
export type Carts = $Result.DefaultSelection<Prisma.$CartsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Size: {
  NONE: 'NONE',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  X_LARGE: 'X_LARGE',
  XX_LARGE: 'XX_LARGE',
  S4YEARS_XS: 'S4YEARS_XS'
};

export type Size = (typeof Size)[keyof typeof Size]


export const TextColor: {
  NONE: 'NONE',
  GREEN: 'GREEN',
  BLUE: 'BLUE',
  YELLOW: 'YELLOW',
  PINK: 'PINK',
  SKY_BLUE: 'SKY_BLUE',
  BROWN: 'BROWN',
  BLACK: 'BLACK',
  WHITE: 'WHITE',
  ORANGE: 'ORANGE',
  PURPLE: 'PURPLE'
};

export type TextColor = (typeof TextColor)[keyof typeof TextColor]

}

export type Size = $Enums.Size

export const Size: typeof $Enums.Size

export type TextColor = $Enums.TextColor

export const TextColor: typeof $Enums.TextColor

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.roles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRoles`: Exposes CRUD operations for the **UserRoles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRoles.findMany()
    * ```
    */
  get userRoles(): Prisma.UserRolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brands`: Exposes CRUD operations for the **Brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.BrandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variants`: Exposes CRUD operations for the **Variants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variants.findMany()
    * ```
    */
  get variants(): Prisma.VariantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **Files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.FilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategories`: Exposes CRUD operations for the **ProductCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategories.findMany()
    * ```
    */
  get productCategories(): Prisma.ProductCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartDetails`: Exposes CRUD operations for the **CartDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartDetails
    * const cartDetails = await prisma.cartDetails.findMany()
    * ```
    */
  get cartDetails(): Prisma.CartDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **Carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.CartsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql


  /**
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Roles: 'Roles',
    Users: 'Users',
    UserRoles: 'UserRoles',
    Orders: 'Orders',
    Payments: 'Payments',
    OrderDetails: 'OrderDetails',
    Products: 'Products',
    Brands: 'Brands',
    Variants: 'Variants',
    Files: 'Files',
    Categories: 'Categories',
    ProductCategories: 'ProductCategories',
    Likes: 'Likes',
    CartDetails: 'CartDetails',
    Carts: 'Carts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "roles" | "users" | "userRoles" | "orders" | "payments" | "orderDetails" | "products" | "brands" | "variants" | "files" | "categories" | "productCategories" | "likes" | "cartDetails" | "carts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      UserRoles: {
        payload: Prisma.$UserRolesPayload<ExtArgs>
        fields: Prisma.UserRolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>
          }
          findFirst: {
            args: Prisma.UserRolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>
          }
          findMany: {
            args: Prisma.UserRolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>[]
          }
          create: {
            args: Prisma.UserRolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>
          }
          createMany: {
            args: Prisma.UserRolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>[]
          }
          delete: {
            args: Prisma.UserRolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>
          }
          update: {
            args: Prisma.UserRolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>
          }
          deleteMany: {
            args: Prisma.UserRolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>[]
          }
          upsert: {
            args: Prisma.UserRolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolesPayload>
          }
          aggregate: {
            args: Prisma.UserRolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRoles>
          }
          groupBy: {
            args: Prisma.UserRolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRolesCountArgs<ExtArgs>
            result: $Utils.Optional<UserRolesCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Brands: {
        payload: Prisma.$BrandsPayload<ExtArgs>
        fields: Prisma.BrandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findFirst: {
            args: Prisma.BrandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findMany: {
            args: Prisma.BrandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          create: {
            args: Prisma.BrandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          createMany: {
            args: Prisma.BrandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          delete: {
            args: Prisma.BrandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          update: {
            args: Prisma.BrandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          deleteMany: {
            args: Prisma.BrandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          upsert: {
            args: Prisma.BrandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.BrandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandsCountArgs<ExtArgs>
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
      Variants: {
        payload: Prisma.$VariantsPayload<ExtArgs>
        fields: Prisma.VariantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          findFirst: {
            args: Prisma.VariantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          findMany: {
            args: Prisma.VariantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>[]
          }
          create: {
            args: Prisma.VariantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          createMany: {
            args: Prisma.VariantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>[]
          }
          delete: {
            args: Prisma.VariantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          update: {
            args: Prisma.VariantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          deleteMany: {
            args: Prisma.VariantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>[]
          }
          upsert: {
            args: Prisma.VariantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantsPayload>
          }
          aggregate: {
            args: Prisma.VariantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariants>
          }
          groupBy: {
            args: Prisma.VariantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantsCountArgs<ExtArgs>
            result: $Utils.Optional<VariantsCountAggregateOutputType> | number
          }
        }
      }
      Files: {
        payload: Prisma.$FilesPayload<ExtArgs>
        fields: Prisma.FilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findFirst: {
            args: Prisma.FilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findMany: {
            args: Prisma.FilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          create: {
            args: Prisma.FilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          createMany: {
            args: Prisma.FilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          delete: {
            args: Prisma.FilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          update: {
            args: Prisma.FilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          deleteMany: {
            args: Prisma.FilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          upsert: {
            args: Prisma.FilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.FilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      ProductCategories: {
        payload: Prisma.$ProductCategoriesPayload<ExtArgs>
        fields: Prisma.ProductCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          findMany: {
            args: Prisma.ProductCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>[]
          }
          create: {
            args: Prisma.ProductCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          createMany: {
            args: Prisma.ProductCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>[]
          }
          delete: {
            args: Prisma.ProductCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          update: {
            args: Prisma.ProductCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.ProductCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategories>
          }
          groupBy: {
            args: Prisma.ProductCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoriesCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      CartDetails: {
        payload: Prisma.$CartDetailsPayload<ExtArgs>
        fields: Prisma.CartDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>
          }
          findFirst: {
            args: Prisma.CartDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>
          }
          findMany: {
            args: Prisma.CartDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>[]
          }
          create: {
            args: Prisma.CartDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>
          }
          createMany: {
            args: Prisma.CartDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>[]
          }
          delete: {
            args: Prisma.CartDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>
          }
          update: {
            args: Prisma.CartDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>
          }
          deleteMany: {
            args: Prisma.CartDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>[]
          }
          upsert: {
            args: Prisma.CartDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartDetailsPayload>
          }
          aggregate: {
            args: Prisma.CartDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartDetails>
          }
          groupBy: {
            args: Prisma.CartDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<CartDetailsCountAggregateOutputType> | number
          }
        }
      }
      Carts: {
        payload: Prisma.$CartsPayload<ExtArgs>
        fields: Prisma.CartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findFirst: {
            args: Prisma.CartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findMany: {
            args: Prisma.CartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          create: {
            args: Prisma.CartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          createMany: {
            args: Prisma.CartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          delete: {
            args: Prisma.CartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          update: {
            args: Prisma.CartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          deleteMany: {
            args: Prisma.CartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          upsert: {
            args: Prisma.CartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.CartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    roles?: RolesOmit
    users?: UsersOmit
    userRoles?: UserRolesOmit
    orders?: OrdersOmit
    payments?: PaymentsOmit
    orderDetails?: OrderDetailsOmit
    products?: ProductsOmit
    brands?: BrandsOmit
    variants?: VariantsOmit
    files?: FilesOmit
    categories?: CategoriesOmit
    productCategories?: ProductCategoriesOmit
    likes?: LikesOmit
    cartDetails?: CartDetailsOmit
    carts?: CartsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRolesWhereInput | $Types.Skip
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    roles: number
    orders: number
    likes: number
    carts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UsersCountOutputTypeCountRolesArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
    carts?: boolean | UsersCountOutputTypeCountCartsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRolesWhereInput | $Types.Skip
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput | $Types.Skip
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput | $Types.Skip
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput | $Types.Skip
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    orderDetails: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | OrdersCountOutputTypeCountOrderDetailsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput | $Types.Skip
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    variants: number
    productCategories: number
    likes: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductsCountOutputTypeCountVariantsArgs
    productCategories?: boolean | ProductsCountOutputTypeCountProductCategoriesArgs
    likes?: boolean | ProductsCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantsWhereInput | $Types.Skip
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoriesWhereInput | $Types.Skip
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput | $Types.Skip
  }


  /**
   * Count Type BrandsCountOutputType
   */

  export type BrandsCountOutputType = {
    products: number
  }

  export type BrandsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandsCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsCountOutputType
     */
    select?: BrandsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput | $Types.Skip
  }


  /**
   * Count Type VariantsCountOutputType
   */

  export type VariantsCountOutputType = {
    orderDetails: number
    cartDetails: number
  }

  export type VariantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | VariantsCountOutputTypeCountOrderDetailsArgs
    cartDetails?: boolean | VariantsCountOutputTypeCountCartDetailsArgs
  }

  // Custom InputTypes
  /**
   * VariantsCountOutputType without action
   */
  export type VariantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantsCountOutputType
     */
    select?: VariantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariantsCountOutputType without action
   */
  export type VariantsCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput | $Types.Skip
  }

  /**
   * VariantsCountOutputType without action
   */
  export type VariantsCountOutputTypeCountCartDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartDetailsWhereInput | $Types.Skip
  }


  /**
   * Count Type FilesCountOutputType
   */

  export type FilesCountOutputType = {
    variants: number
  }

  export type FilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | FilesCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilesCountOutputType
     */
    select?: FilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilesCountOutputType without action
   */
  export type FilesCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantsWhereInput | $Types.Skip
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    productCategories: number
    Categories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategories?: boolean | CategoriesCountOutputTypeCountProductCategoriesArgs
    Categories?: boolean | CategoriesCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoriesWhereInput | $Types.Skip
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput | $Types.Skip
  }


  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cartDetails: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartDetails?: boolean | CartsCountOutputTypeCountCartDetailsArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCartDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartDetailsWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
  }

  export type RolesMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
  }

  export type RolesCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput | $Types.Skip
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[] | $Types.Skip
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    name: string
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    users?: boolean | Roles$usersArgs<ExtArgs> | $Types.Skip
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["roles"], $Types.Skip>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Roles$usersArgs<ExtArgs> | $Types.Skip
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type RolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      users: Prisma.$UserRolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'String'>
    readonly name: FieldRef<"Roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number | $Types.Skip
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Roles createManyAndReturn
   */
  export type RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput | $Types.Skip
    /**
     * Limit how many Roles to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Roles updateManyAndReturn
   */
  export type RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput | $Types.Skip
    /**
     * Limit how many Roles to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput | $Types.Skip
    /**
     * Limit how many Roles to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Roles.users
   */
  export type Roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    where?: UserRolesWhereInput | $Types.Skip
    orderBy?: UserRolesOrderByWithRelationInput | UserRolesOrderByWithRelationInput[] | $Types.Skip
    cursor?: UserRolesWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: UserRolesScalarFieldEnum | UserRolesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    nickname: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    nickname: number
    first_name: number
    last_name: number
    email: number
    password: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true | $Types.Skip
    nickname?: true | $Types.Skip
    first_name?: true | $Types.Skip
    last_name?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
  }

  export type UsersMaxAggregateInputType = {
    id?: true | $Types.Skip
    nickname?: true | $Types.Skip
    first_name?: true | $Types.Skip
    last_name?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
  }

  export type UsersCountAggregateInputType = {
    id?: true | $Types.Skip
    nickname?: true | $Types.Skip
    first_name?: true | $Types.Skip
    last_name?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput | $Types.Skip
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[] | $Types.Skip
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    nickname?: boolean | $Types.Skip
    first_name?: boolean | $Types.Skip
    last_name?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    roles?: boolean | Users$rolesArgs<ExtArgs> | $Types.Skip
    orders?: boolean | Users$ordersArgs<ExtArgs> | $Types.Skip
    likes?: boolean | Users$likesArgs<ExtArgs> | $Types.Skip
    carts?: boolean | Users$cartsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    nickname?: boolean | $Types.Skip
    first_name?: boolean | $Types.Skip
    last_name?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    nickname?: boolean | $Types.Skip
    first_name?: boolean | $Types.Skip
    last_name?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean | $Types.Skip
    nickname?: boolean | $Types.Skip
    first_name?: boolean | $Types.Skip
    last_name?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "first_name" | "last_name" | "email" | "password", ExtArgs["result"]["users"], $Types.Skip>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Users$rolesArgs<ExtArgs> | $Types.Skip
    orders?: boolean | Users$ordersArgs<ExtArgs> | $Types.Skip
    likes?: boolean | Users$likesArgs<ExtArgs> | $Types.Skip
    carts?: boolean | Users$cartsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      roles: Prisma.$UserRolesPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      carts: Prisma.$CartsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nickname: string
      first_name: string
      last_name: string
      email: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Users$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Users$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Users$likesArgs<ExtArgs> = {}>(args?: Subset<T, Users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carts<T extends Users$cartsArgs<ExtArgs> = {}>(args?: Subset<T, Users$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly nickname: FieldRef<"Users", 'String'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput | $Types.Skip
    /**
     * Limit how many Users to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Users.roles
   */
  export type Users$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    where?: UserRolesWhereInput | $Types.Skip
    orderBy?: UserRolesOrderByWithRelationInput | UserRolesOrderByWithRelationInput[] | $Types.Skip
    cursor?: UserRolesWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: UserRolesScalarFieldEnum | UserRolesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Users.orders
   */
  export type Users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput | $Types.Skip
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrdersWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Users.likes
   */
  export type Users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput | $Types.Skip
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[] | $Types.Skip
    cursor?: LikesWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Users.carts
   */
  export type Users$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    where?: CartsWhereInput | $Types.Skip
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[] | $Types.Skip
    cursor?: CartsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model UserRoles
   */

  export type AggregateUserRoles = {
    _count: UserRolesCountAggregateOutputType | null
    _min: UserRolesMinAggregateOutputType | null
    _max: UserRolesMaxAggregateOutputType | null
  }

  export type UserRolesMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRolesMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRolesCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRolesMinAggregateInputType = {
    userId?: true | $Types.Skip
    roleId?: true | $Types.Skip
  }

  export type UserRolesMaxAggregateInputType = {
    userId?: true | $Types.Skip
    roleId?: true | $Types.Skip
  }

  export type UserRolesCountAggregateInputType = {
    userId?: true | $Types.Skip
    roleId?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserRolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to aggregate.
     */
    where?: UserRolesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRolesOrderByWithRelationInput | UserRolesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRolesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRolesMaxAggregateInputType
  }

  export type GetUserRolesAggregateType<T extends UserRolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRoles[P]>
      : GetScalarType<T[P], AggregateUserRoles[P]>
  }




  export type UserRolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRolesWhereInput | $Types.Skip
    orderBy?: UserRolesOrderByWithAggregationInput | UserRolesOrderByWithAggregationInput[] | $Types.Skip
    by: UserRolesScalarFieldEnum[] | UserRolesScalarFieldEnum
    having?: UserRolesScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserRolesCountAggregateInputType | true
    _min?: UserRolesMinAggregateInputType
    _max?: UserRolesMaxAggregateInputType
  }

  export type UserRolesGroupByOutputType = {
    userId: string
    roleId: string
    _count: UserRolesCountAggregateOutputType | null
    _min: UserRolesMinAggregateOutputType | null
    _max: UserRolesMaxAggregateOutputType | null
  }

  type GetUserRolesGroupByPayload<T extends UserRolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRolesGroupByOutputType[P]>
            : GetScalarType<T[P], UserRolesGroupByOutputType[P]>
        }
      >
    >


  export type UserRolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean | $Types.Skip
    roleId?: boolean | $Types.Skip
    users?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    roles?: boolean | RolesDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["userRoles"]>

  export type UserRolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean | $Types.Skip
    roleId?: boolean | $Types.Skip
    users?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    roles?: boolean | RolesDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["userRoles"]>

  export type UserRolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean | $Types.Skip
    roleId?: boolean | $Types.Skip
    users?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    roles?: boolean | RolesDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["userRoles"]>

  export type UserRolesSelectScalar = {
    userId?: boolean | $Types.Skip
    roleId?: boolean | $Types.Skip
  }

  export type UserRolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRoles"], $Types.Skip>
  export type UserRolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    roles?: boolean | RolesDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserRolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    roles?: boolean | RolesDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserRolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    roles?: boolean | RolesDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $UserRolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRoles"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      roles: Prisma.$RolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
    }, ExtArgs["result"]["userRoles"]>
    composites: {}
  }

  type UserRolesGetPayload<S extends boolean | null | undefined | UserRolesDefaultArgs> = $Result.GetResult<Prisma.$UserRolesPayload, S>

  type UserRolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRolesCountAggregateInputType | true
    }

  export interface UserRolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRoles'], meta: { name: 'UserRoles' } }
    /**
     * Find zero or one UserRoles that matches the filter.
     * @param {UserRolesFindUniqueArgs} args - Arguments to find a UserRoles
     * @example
     * // Get one UserRoles
     * const userRoles = await prisma.userRoles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRolesFindUniqueArgs>(args: SelectSubset<T, UserRolesFindUniqueArgs<ExtArgs>>): Prisma__UserRolesClient<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRoles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRolesFindUniqueOrThrowArgs} args - Arguments to find a UserRoles
     * @example
     * // Get one UserRoles
     * const userRoles = await prisma.userRoles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRolesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRolesClient<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesFindFirstArgs} args - Arguments to find a UserRoles
     * @example
     * // Get one UserRoles
     * const userRoles = await prisma.userRoles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRolesFindFirstArgs>(args?: SelectSubset<T, UserRolesFindFirstArgs<ExtArgs>>): Prisma__UserRolesClient<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRoles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesFindFirstOrThrowArgs} args - Arguments to find a UserRoles
     * @example
     * // Get one UserRoles
     * const userRoles = await prisma.userRoles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRolesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRolesClient<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRoles.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRoles.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRolesWithUserIdOnly = await prisma.userRoles.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRolesFindManyArgs>(args?: SelectSubset<T, UserRolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRoles.
     * @param {UserRolesCreateArgs} args - Arguments to create a UserRoles.
     * @example
     * // Create one UserRoles
     * const UserRoles = await prisma.userRoles.create({
     *   data: {
     *     // ... data to create a UserRoles
     *   }
     * })
     * 
     */
    create<T extends UserRolesCreateArgs>(args: SelectSubset<T, UserRolesCreateArgs<ExtArgs>>): Prisma__UserRolesClient<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRolesCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRoles = await prisma.userRoles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRolesCreateManyArgs>(args?: SelectSubset<T, UserRolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRolesCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRoles = await prisma.userRoles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userId`
     * const userRolesWithUserIdOnly = await prisma.userRoles.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRolesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRoles.
     * @param {UserRolesDeleteArgs} args - Arguments to delete one UserRoles.
     * @example
     * // Delete one UserRoles
     * const UserRoles = await prisma.userRoles.delete({
     *   where: {
     *     // ... filter to delete one UserRoles
     *   }
     * })
     * 
     */
    delete<T extends UserRolesDeleteArgs>(args: SelectSubset<T, UserRolesDeleteArgs<ExtArgs>>): Prisma__UserRolesClient<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRoles.
     * @param {UserRolesUpdateArgs} args - Arguments to update one UserRoles.
     * @example
     * // Update one UserRoles
     * const userRoles = await prisma.userRoles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRolesUpdateArgs>(args: SelectSubset<T, UserRolesUpdateArgs<ExtArgs>>): Prisma__UserRolesClient<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRolesDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRoles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRolesDeleteManyArgs>(args?: SelectSubset<T, UserRolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRoles = await prisma.userRoles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRolesUpdateManyArgs>(args: SelectSubset<T, UserRolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRolesUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRoles = await prisma.userRoles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `userId`
     * const userRolesWithUserIdOnly = await prisma.userRoles.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRolesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRoles.
     * @param {UserRolesUpsertArgs} args - Arguments to update or create a UserRoles.
     * @example
     * // Update or create a UserRoles
     * const userRoles = await prisma.userRoles.upsert({
     *   create: {
     *     // ... data to create a UserRoles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRoles we want to update
     *   }
     * })
     */
    upsert<T extends UserRolesUpsertArgs>(args: SelectSubset<T, UserRolesUpsertArgs<ExtArgs>>): Prisma__UserRolesClient<$Result.GetResult<Prisma.$UserRolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRoles.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRolesCountArgs>(
      args?: Subset<T, UserRolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRolesAggregateArgs>(args: Subset<T, UserRolesAggregateArgs>): Prisma.PrismaPromise<GetUserRolesAggregateType<T>>

    /**
     * Group by UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRolesGroupByArgs['orderBy'] }
        : { orderBy?: UserRolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRoles model
   */
  readonly fields: UserRolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRoles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roles<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRoles model
   */
  interface UserRolesFieldRefs {
    readonly userId: FieldRef<"UserRoles", 'String'>
    readonly roleId: FieldRef<"UserRoles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRoles findUnique
   */
  export type UserRolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where: UserRolesWhereUniqueInput
  }

  /**
   * UserRoles findUniqueOrThrow
   */
  export type UserRolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where: UserRolesWhereUniqueInput
  }

  /**
   * UserRoles findFirst
   */
  export type UserRolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRolesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRolesOrderByWithRelationInput | UserRolesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRolesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRolesScalarFieldEnum | UserRolesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * UserRoles findFirstOrThrow
   */
  export type UserRolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRolesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRolesOrderByWithRelationInput | UserRolesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRolesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRolesScalarFieldEnum | UserRolesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * UserRoles findMany
   */
  export type UserRolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRolesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRolesOrderByWithRelationInput | UserRolesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRolesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number | $Types.Skip
    distinct?: UserRolesScalarFieldEnum | UserRolesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * UserRoles create
   */
  export type UserRolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRoles.
     */
    data: XOR<UserRolesCreateInput, UserRolesUncheckedCreateInput>
  }

  /**
   * UserRoles createMany
   */
  export type UserRolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRolesCreateManyInput | UserRolesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * UserRoles createManyAndReturn
   */
  export type UserRolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRolesCreateManyInput | UserRolesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRoles update
   */
  export type UserRolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRoles.
     */
    data: XOR<UserRolesUpdateInput, UserRolesUncheckedUpdateInput>
    /**
     * Choose, which UserRoles to update.
     */
    where: UserRolesWhereUniqueInput
  }

  /**
   * UserRoles updateMany
   */
  export type UserRolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRolesUpdateManyMutationInput, UserRolesUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRolesWhereInput | $Types.Skip
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * UserRoles updateManyAndReturn
   */
  export type UserRolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRolesUpdateManyMutationInput, UserRolesUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRolesWhereInput | $Types.Skip
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRoles upsert
   */
  export type UserRolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRoles to update in case it exists.
     */
    where: UserRolesWhereUniqueInput
    /**
     * In case the UserRoles found by the `where` argument doesn't exist, create a new UserRoles with this data.
     */
    create: XOR<UserRolesCreateInput, UserRolesUncheckedCreateInput>
    /**
     * In case the UserRoles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRolesUpdateInput, UserRolesUncheckedUpdateInput>
  }

  /**
   * UserRoles delete
   */
  export type UserRolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
    /**
     * Filter which UserRoles to delete.
     */
    where: UserRolesWhereUniqueInput
  }

  /**
   * UserRoles deleteMany
   */
  export type UserRolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRolesWhereInput | $Types.Skip
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * UserRoles without action
   */
  export type UserRolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoles
     */
    select?: UserRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoles
     */
    omit?: UserRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRolesInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    user_id: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    user_id: string | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    created_at: number
    user_id: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    user_id?: true | $Types.Skip
  }

  export type OrdersMaxAggregateInputType = {
    id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    user_id?: true | $Types.Skip
  }

  export type OrdersCountAggregateInputType = {
    id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    user_id?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput | $Types.Skip
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[] | $Types.Skip
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: OrdersCountAggregateInputType | true
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    created_at: Date
    user_id: string
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    orderDetails?: boolean | Orders$orderDetailsArgs<ExtArgs> | $Types.Skip
    payment?: boolean | Orders$paymentArgs<ExtArgs> | $Types.Skip
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "user_id", ExtArgs["result"]["orders"], $Types.Skip>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    orderDetails?: boolean | Orders$orderDetailsArgs<ExtArgs> | $Types.Skip
    payment?: boolean | Orders$paymentArgs<ExtArgs> | $Types.Skip
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      orderDetails: Prisma.$OrderDetailsPayload<ExtArgs>[]
      payment: Prisma.$PaymentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      user_id: string
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderDetails<T extends Orders$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Orders$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Orders$paymentArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly user_id: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput | $Types.Skip
    /**
     * Limit how many Orders to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput | $Types.Skip
    /**
     * Limit how many Orders to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput | $Types.Skip
    /**
     * Limit how many Orders to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Orders.orderDetails
   */
  export type Orders$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput | $Types.Skip
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderDetailsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Orders.payment
   */
  export type Orders$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput | $Types.Skip
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    status: string | null
    amount: number | null
    currency: string | null
    receipt_url: string | null
    payment_intent: string | null
    orderId: string | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    status: string | null
    amount: number | null
    currency: string | null
    receipt_url: string | null
    payment_intent: string | null
    orderId: string | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    status: number
    amount: number
    currency: number
    receipt_url: number
    payment_intent: number
    orderId: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    amount?: true | $Types.Skip
  }

  export type PaymentsSumAggregateInputType = {
    amount?: true | $Types.Skip
  }

  export type PaymentsMinAggregateInputType = {
    id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    status?: true | $Types.Skip
    amount?: true | $Types.Skip
    currency?: true | $Types.Skip
    receipt_url?: true | $Types.Skip
    payment_intent?: true | $Types.Skip
    orderId?: true | $Types.Skip
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    status?: true | $Types.Skip
    amount?: true | $Types.Skip
    currency?: true | $Types.Skip
    receipt_url?: true | $Types.Skip
    payment_intent?: true | $Types.Skip
    orderId?: true | $Types.Skip
  }

  export type PaymentsCountAggregateInputType = {
    id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    status?: true | $Types.Skip
    amount?: true | $Types.Skip
    currency?: true | $Types.Skip
    receipt_url?: true | $Types.Skip
    payment_intent?: true | $Types.Skip
    orderId?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput | $Types.Skip
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[] | $Types.Skip
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    status: string
    amount: number
    currency: string
    receipt_url: string
    payment_intent: string
    orderId: string
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    amount?: boolean | $Types.Skip
    currency?: boolean | $Types.Skip
    receipt_url?: boolean | $Types.Skip
    payment_intent?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    order?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    amount?: boolean | $Types.Skip
    currency?: boolean | $Types.Skip
    receipt_url?: boolean | $Types.Skip
    payment_intent?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    order?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    amount?: boolean | $Types.Skip
    currency?: boolean | $Types.Skip
    receipt_url?: boolean | $Types.Skip
    payment_intent?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    order?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    amount?: boolean | $Types.Skip
    currency?: boolean | $Types.Skip
    receipt_url?: boolean | $Types.Skip
    payment_intent?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "status" | "amount" | "currency" | "receipt_url" | "payment_intent" | "orderId", ExtArgs["result"]["payments"], $Types.Skip>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
      status: string
      amount: number
      currency: string
      receipt_url: string
      payment_intent: string
      orderId: string
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'String'>
    readonly created_at: FieldRef<"Payments", 'DateTime'>
    readonly updated_at: FieldRef<"Payments", 'DateTime'>
    readonly status: FieldRef<"Payments", 'String'>
    readonly amount: FieldRef<"Payments", 'Float'>
    readonly currency: FieldRef<"Payments", 'String'>
    readonly receipt_url: FieldRef<"Payments", 'String'>
    readonly payment_intent: FieldRef<"Payments", 'String'>
    readonly orderId: FieldRef<"Payments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number | $Types.Skip
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput | $Types.Skip
    /**
     * Limit how many Payments to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput | $Types.Skip
    /**
     * Limit how many Payments to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput | $Types.Skip
    /**
     * Limit how many Payments to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderDetailsSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: number | null
    orderDetails_id: string | null
    variant_id: string | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: number | null
    orderDetails_id: string | null
    variant_id: string | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    orderDetails_id: number
    variant_id: number
    _all: number
  }


  export type OrderDetailsAvgAggregateInputType = {
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type OrderDetailsSumAggregateInputType = {
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type OrderDetailsMinAggregateInputType = {
    id?: true | $Types.Skip
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
    orderDetails_id?: true | $Types.Skip
    variant_id?: true | $Types.Skip
  }

  export type OrderDetailsMaxAggregateInputType = {
    id?: true | $Types.Skip
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
    orderDetails_id?: true | $Types.Skip
    variant_id?: true | $Types.Skip
  }

  export type OrderDetailsCountAggregateInputType = {
    id?: true | $Types.Skip
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
    orderDetails_id?: true | $Types.Skip
    variant_id?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput | $Types.Skip
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[] | $Types.Skip
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: OrderDetailsCountAggregateInputType | true
    _avg?: OrderDetailsAvgAggregateInputType
    _sum?: OrderDetailsSumAggregateInputType
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    id: string
    quantity: number
    price: number
    orderDetails_id: string
    variant_id: string
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    orderDetails_id?: boolean | $Types.Skip
    variant_id?: boolean | $Types.Skip
    orderDetails?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    orderDetails_id?: boolean | $Types.Skip
    variant_id?: boolean | $Types.Skip
    orderDetails?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    orderDetails_id?: boolean | $Types.Skip
    variant_id?: boolean | $Types.Skip
    orderDetails?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectScalar = {
    id?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    orderDetails_id?: boolean | $Types.Skip
    variant_id?: boolean | $Types.Skip
  }

  export type OrderDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "orderDetails_id" | "variant_id", ExtArgs["result"]["orderDetails"], $Types.Skip>
  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | OrdersDefaultArgs<ExtArgs> | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      orderDetails: Prisma.$OrdersPayload<ExtArgs>
      variants: Prisma.$VariantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      price: number
      orderDetails_id: string
      variant_id: string
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }

  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailsFindUniqueArgs>(args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailsFindFirstArgs>(args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderDetailsFindManyArgs>(args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
     */
    create<T extends OrderDetailsCreateArgs>(args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailsCreateManyArgs>(args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailsCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailsDeleteArgs>(args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailsUpdateArgs>(args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailsDeleteManyArgs>(args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailsUpdateManyArgs>(args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails and returns the data updated in the database.
     * @param {OrderDetailsUpdateManyAndReturnArgs} args - Arguments to update many OrderDetails.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderDetails and only return the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailsUpsertArgs>(args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderDetails<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variants<T extends VariantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariantsDefaultArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderDetails model
   */
  interface OrderDetailsFieldRefs {
    readonly id: FieldRef<"OrderDetails", 'String'>
    readonly quantity: FieldRef<"OrderDetails", 'Int'>
    readonly price: FieldRef<"OrderDetails", 'Float'>
    readonly orderDetails_id: FieldRef<"OrderDetails", 'String'>
    readonly variant_id: FieldRef<"OrderDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number | $Types.Skip
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }

  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * OrderDetails createManyAndReturn
   */
  export type OrderDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput | $Types.Skip
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * OrderDetails updateManyAndReturn
   */
  export type OrderDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput | $Types.Skip
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }

  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput | $Types.Skip
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
    active: boolean | null
    brand_id: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
    active: boolean | null
    brand_id: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    created_at: number
    updated_at: number
    active: number
    brand_id: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true | $Types.Skip
  }

  export type ProductsSumAggregateInputType = {
    price?: true | $Types.Skip
  }

  export type ProductsMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    price?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    active?: true | $Types.Skip
    brand_id?: true | $Types.Skip
  }

  export type ProductsMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    price?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    active?: true | $Types.Skip
    brand_id?: true | $Types.Skip
  }

  export type ProductsCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    price?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    active?: true | $Types.Skip
    brand_id?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput | $Types.Skip
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[] | $Types.Skip
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    price: number
    created_at: Date
    updated_at: Date
    active: boolean
    brand_id: string
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id?: boolean | $Types.Skip
    brand?: boolean | BrandsDefaultArgs<ExtArgs> | $Types.Skip
    variants?: boolean | Products$variantsArgs<ExtArgs> | $Types.Skip
    productCategories?: boolean | Products$productCategoriesArgs<ExtArgs> | $Types.Skip
    likes?: boolean | Products$likesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id?: boolean | $Types.Skip
    brand?: boolean | BrandsDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id?: boolean | $Types.Skip
    brand?: boolean | BrandsDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id?: boolean | $Types.Skip
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "created_at" | "updated_at" | "active" | "brand_id", ExtArgs["result"]["products"], $Types.Skip>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandsDefaultArgs<ExtArgs> | $Types.Skip
    variants?: boolean | Products$variantsArgs<ExtArgs> | $Types.Skip
    productCategories?: boolean | Products$productCategoriesArgs<ExtArgs> | $Types.Skip
    likes?: boolean | Products$likesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandsDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandsDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      brand: Prisma.$BrandsPayload<ExtArgs>
      variants: Prisma.$VariantsPayload<ExtArgs>[]
      productCategories: Prisma.$ProductCategoriesPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      created_at: Date
      updated_at: Date
      active: boolean
      brand_id: string
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandsDefaultArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variants<T extends Products$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Products$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productCategories<T extends Products$productCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Products$productCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Products$likesArgs<ExtArgs> = {}>(args?: Subset<T, Products$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Float'>
    readonly created_at: FieldRef<"Products", 'DateTime'>
    readonly updated_at: FieldRef<"Products", 'DateTime'>
    readonly active: FieldRef<"Products", 'Boolean'>
    readonly brand_id: FieldRef<"Products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number | $Types.Skip
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput | $Types.Skip
    /**
     * Limit how many Products to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput | $Types.Skip
    /**
     * Limit how many Products to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput | $Types.Skip
    /**
     * Limit how many Products to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Products.variants
   */
  export type Products$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    where?: VariantsWhereInput | $Types.Skip
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[] | $Types.Skip
    cursor?: VariantsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Products.productCategories
   */
  export type Products$productCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    where?: ProductCategoriesWhereInput | $Types.Skip
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProductCategoriesWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Products.likes
   */
  export type Products$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput | $Types.Skip
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[] | $Types.Skip
    cursor?: LikesWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BrandsMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
  }

  export type BrandsMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
  }

  export type BrandsCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to aggregate.
     */
    where?: BrandsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type BrandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandsWhereInput | $Types.Skip
    orderBy?: BrandsOrderByWithAggregationInput | BrandsOrderByWithAggregationInput[] | $Types.Skip
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: BrandsScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: BrandsCountAggregateInputType | true
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    id: string
    name: string
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends BrandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type BrandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    products?: boolean | Brands$productsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
  }

  export type BrandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["brands"], $Types.Skip>
  export type BrandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Brands$productsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type BrandsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brands"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }

  type BrandsGetPayload<S extends boolean | null | undefined | BrandsDefaultArgs> = $Result.GetResult<Prisma.$BrandsPayload, S>

  type BrandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface BrandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brands'], meta: { name: 'Brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {BrandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandsFindUniqueArgs>(args: SelectSubset<T, BrandsFindUniqueArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandsFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandsFindFirstArgs>(args?: SelectSubset<T, BrandsFindFirstArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandsFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandsFindManyArgs>(args?: SelectSubset<T, BrandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brands.
     * @param {BrandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
     */
    create<T extends BrandsCreateArgs>(args: SelectSubset<T, BrandsCreateArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandsCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandsCreateManyArgs>(args?: SelectSubset<T, BrandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandsCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandsWithIdOnly = await prisma.brands.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandsCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brands.
     * @param {BrandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
     */
    delete<T extends BrandsDeleteArgs>(args: SelectSubset<T, BrandsDeleteArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brands.
     * @param {BrandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandsUpdateArgs>(args: SelectSubset<T, BrandsUpdateArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandsDeleteManyArgs>(args?: SelectSubset<T, BrandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandsUpdateManyArgs>(args: SelectSubset<T, BrandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandsUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandsWithIdOnly = await prisma.brands.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandsUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brands.
     * @param {BrandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
     */
    upsert<T extends BrandsUpsertArgs>(args: SelectSubset<T, BrandsUpsertArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandsCountArgs>(
      args?: Subset<T, BrandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandsGroupByArgs['orderBy'] }
        : { orderBy?: BrandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brands model
   */
  readonly fields: BrandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Brands$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brands$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brands model
   */
  interface BrandsFieldRefs {
    readonly id: FieldRef<"Brands", 'String'>
    readonly name: FieldRef<"Brands", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brands findUnique
   */
  export type BrandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findUniqueOrThrow
   */
  export type BrandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findFirst
   */
  export type BrandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Brands findFirstOrThrow
   */
  export type BrandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Brands findMany
   */
  export type BrandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number | $Types.Skip
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Brands create
   */
  export type BrandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The data needed to create a Brands.
     */
    data: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
  }

  /**
   * Brands createMany
   */
  export type BrandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Brands createManyAndReturn
   */
  export type BrandsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Brands update
   */
  export type BrandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The data needed to update a Brands.
     */
    data: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
    /**
     * Choose, which Brands to update.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands updateMany
   */
  export type BrandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput | $Types.Skip
    /**
     * Limit how many Brands to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Brands updateManyAndReturn
   */
  export type BrandsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput | $Types.Skip
    /**
     * Limit how many Brands to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Brands upsert
   */
  export type BrandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The filter to search for the Brands to update in case it exists.
     */
    where: BrandsWhereUniqueInput
    /**
     * In case the Brands found by the `where` argument doesn't exist, create a new Brands with this data.
     */
    create: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
    /**
     * In case the Brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
  }

  /**
   * Brands delete
   */
  export type BrandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter which Brands to delete.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands deleteMany
   */
  export type BrandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandsWhereInput | $Types.Skip
    /**
     * Limit how many Brands to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Brands.products
   */
  export type Brands$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput | $Types.Skip
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProductsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Brands without action
   */
  export type BrandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
  }


  /**
   * Model Variants
   */

  export type AggregateVariants = {
    _count: VariantsCountAggregateOutputType | null
    _avg: VariantsAvgAggregateOutputType | null
    _sum: VariantsSumAggregateOutputType | null
    _min: VariantsMinAggregateOutputType | null
    _max: VariantsMaxAggregateOutputType | null
  }

  export type VariantsAvgAggregateOutputType = {
    stock: number | null
  }

  export type VariantsSumAggregateOutputType = {
    stock: number | null
  }

  export type VariantsMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    file_id: string | null
    size: $Enums.Size | null
    textColor: $Enums.TextColor | null
    rgb: string | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantsMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    file_id: string | null
    size: $Enums.Size | null
    textColor: $Enums.TextColor | null
    rgb: string | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VariantsCountAggregateOutputType = {
    id: number
    product_id: number
    file_id: number
    size: number
    textColor: number
    rgb: number
    stock: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VariantsAvgAggregateInputType = {
    stock?: true | $Types.Skip
  }

  export type VariantsSumAggregateInputType = {
    stock?: true | $Types.Skip
  }

  export type VariantsMinAggregateInputType = {
    id?: true | $Types.Skip
    product_id?: true | $Types.Skip
    file_id?: true | $Types.Skip
    size?: true | $Types.Skip
    textColor?: true | $Types.Skip
    rgb?: true | $Types.Skip
    stock?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type VariantsMaxAggregateInputType = {
    id?: true | $Types.Skip
    product_id?: true | $Types.Skip
    file_id?: true | $Types.Skip
    size?: true | $Types.Skip
    textColor?: true | $Types.Skip
    rgb?: true | $Types.Skip
    stock?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type VariantsCountAggregateInputType = {
    id?: true | $Types.Skip
    product_id?: true | $Types.Skip
    file_id?: true | $Types.Skip
    size?: true | $Types.Skip
    textColor?: true | $Types.Skip
    rgb?: true | $Types.Skip
    stock?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type VariantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to aggregate.
     */
    where?: VariantsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantsMaxAggregateInputType
  }

  export type GetVariantsAggregateType<T extends VariantsAggregateArgs> = {
        [P in keyof T & keyof AggregateVariants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariants[P]>
      : GetScalarType<T[P], AggregateVariants[P]>
  }




  export type VariantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantsWhereInput | $Types.Skip
    orderBy?: VariantsOrderByWithAggregationInput | VariantsOrderByWithAggregationInput[] | $Types.Skip
    by: VariantsScalarFieldEnum[] | VariantsScalarFieldEnum
    having?: VariantsScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: VariantsCountAggregateInputType | true
    _avg?: VariantsAvgAggregateInputType
    _sum?: VariantsSumAggregateInputType
    _min?: VariantsMinAggregateInputType
    _max?: VariantsMaxAggregateInputType
  }

  export type VariantsGroupByOutputType = {
    id: string
    product_id: string
    file_id: string
    size: $Enums.Size
    textColor: $Enums.TextColor
    rgb: string
    stock: number
    createdAt: Date
    updatedAt: Date
    _count: VariantsCountAggregateOutputType | null
    _avg: VariantsAvgAggregateOutputType | null
    _sum: VariantsSumAggregateOutputType | null
    _min: VariantsMinAggregateOutputType | null
    _max: VariantsMaxAggregateOutputType | null
  }

  type GetVariantsGroupByPayload<T extends VariantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantsGroupByOutputType[P]>
            : GetScalarType<T[P], VariantsGroupByOutputType[P]>
        }
      >
    >


  export type VariantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    product_id?: boolean | $Types.Skip
    file_id?: boolean | $Types.Skip
    size?: boolean | $Types.Skip
    textColor?: boolean | $Types.Skip
    rgb?: boolean | $Types.Skip
    stock?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    product?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    file?: boolean | Variants$fileArgs<ExtArgs> | $Types.Skip
    orderDetails?: boolean | Variants$orderDetailsArgs<ExtArgs> | $Types.Skip
    cartDetails?: boolean | Variants$cartDetailsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | VariantsCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["variants"]>

  export type VariantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    product_id?: boolean | $Types.Skip
    file_id?: boolean | $Types.Skip
    size?: boolean | $Types.Skip
    textColor?: boolean | $Types.Skip
    rgb?: boolean | $Types.Skip
    stock?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    product?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    file?: boolean | Variants$fileArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["variants"]>

  export type VariantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    product_id?: boolean | $Types.Skip
    file_id?: boolean | $Types.Skip
    size?: boolean | $Types.Skip
    textColor?: boolean | $Types.Skip
    rgb?: boolean | $Types.Skip
    stock?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    product?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    file?: boolean | Variants$fileArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["variants"]>

  export type VariantsSelectScalar = {
    id?: boolean | $Types.Skip
    product_id?: boolean | $Types.Skip
    file_id?: boolean | $Types.Skip
    size?: boolean | $Types.Skip
    textColor?: boolean | $Types.Skip
    rgb?: boolean | $Types.Skip
    stock?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type VariantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "file_id" | "size" | "textColor" | "rgb" | "stock" | "createdAt" | "updatedAt", ExtArgs["result"]["variants"], $Types.Skip>
  export type VariantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    file?: boolean | Variants$fileArgs<ExtArgs> | $Types.Skip
    orderDetails?: boolean | Variants$orderDetailsArgs<ExtArgs> | $Types.Skip
    cartDetails?: boolean | Variants$cartDetailsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | VariantsCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type VariantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    file?: boolean | Variants$fileArgs<ExtArgs> | $Types.Skip
  }
  export type VariantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    file?: boolean | Variants$fileArgs<ExtArgs> | $Types.Skip
  }

  export type $VariantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variants"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
      file: Prisma.$FilesPayload<ExtArgs> | null
      orderDetails: Prisma.$OrderDetailsPayload<ExtArgs>[]
      cartDetails: Prisma.$CartDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      file_id: string
      size: $Enums.Size
      textColor: $Enums.TextColor
      rgb: string
      stock: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variants"]>
    composites: {}
  }

  type VariantsGetPayload<S extends boolean | null | undefined | VariantsDefaultArgs> = $Result.GetResult<Prisma.$VariantsPayload, S>

  type VariantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantsCountAggregateInputType | true
    }

  export interface VariantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variants'], meta: { name: 'Variants' } }
    /**
     * Find zero or one Variants that matches the filter.
     * @param {VariantsFindUniqueArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantsFindUniqueArgs>(args: SelectSubset<T, VariantsFindUniqueArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantsFindUniqueOrThrowArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantsFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsFindFirstArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantsFindFirstArgs>(args?: SelectSubset<T, VariantsFindFirstArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsFindFirstOrThrowArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantsFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variants.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantsWithIdOnly = await prisma.variants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantsFindManyArgs>(args?: SelectSubset<T, VariantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variants.
     * @param {VariantsCreateArgs} args - Arguments to create a Variants.
     * @example
     * // Create one Variants
     * const Variants = await prisma.variants.create({
     *   data: {
     *     // ... data to create a Variants
     *   }
     * })
     * 
     */
    create<T extends VariantsCreateArgs>(args: SelectSubset<T, VariantsCreateArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {VariantsCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variants = await prisma.variants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantsCreateManyArgs>(args?: SelectSubset<T, VariantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variants and returns the data saved in the database.
     * @param {VariantsCreateManyAndReturnArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variants = await prisma.variants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variants and only return the `id`
     * const variantsWithIdOnly = await prisma.variants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantsCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variants.
     * @param {VariantsDeleteArgs} args - Arguments to delete one Variants.
     * @example
     * // Delete one Variants
     * const Variants = await prisma.variants.delete({
     *   where: {
     *     // ... filter to delete one Variants
     *   }
     * })
     * 
     */
    delete<T extends VariantsDeleteArgs>(args: SelectSubset<T, VariantsDeleteArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variants.
     * @param {VariantsUpdateArgs} args - Arguments to update one Variants.
     * @example
     * // Update one Variants
     * const variants = await prisma.variants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantsUpdateArgs>(args: SelectSubset<T, VariantsUpdateArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {VariantsDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantsDeleteManyArgs>(args?: SelectSubset<T, VariantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variants = await prisma.variants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantsUpdateManyArgs>(args: SelectSubset<T, VariantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants and returns the data updated in the database.
     * @param {VariantsUpdateManyAndReturnArgs} args - Arguments to update many Variants.
     * @example
     * // Update many Variants
     * const variants = await prisma.variants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variants and only return the `id`
     * const variantsWithIdOnly = await prisma.variants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VariantsUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variants.
     * @param {VariantsUpsertArgs} args - Arguments to update or create a Variants.
     * @example
     * // Update or create a Variants
     * const variants = await prisma.variants.upsert({
     *   create: {
     *     // ... data to create a Variants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variants we want to update
     *   }
     * })
     */
    upsert<T extends VariantsUpsertArgs>(args: SelectSubset<T, VariantsUpsertArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variants.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantsCountArgs>(
      args?: Subset<T, VariantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantsAggregateArgs>(args: Subset<T, VariantsAggregateArgs>): Prisma.PrismaPromise<GetVariantsAggregateType<T>>

    /**
     * Group by Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantsGroupByArgs['orderBy'] }
        : { orderBy?: VariantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variants model
   */
  readonly fields: VariantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    file<T extends Variants$fileArgs<ExtArgs> = {}>(args?: Subset<T, Variants$fileArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderDetails<T extends Variants$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Variants$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartDetails<T extends Variants$cartDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Variants$cartDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Variants model
   */
  interface VariantsFieldRefs {
    readonly id: FieldRef<"Variants", 'String'>
    readonly product_id: FieldRef<"Variants", 'String'>
    readonly file_id: FieldRef<"Variants", 'String'>
    readonly size: FieldRef<"Variants", 'Size'>
    readonly textColor: FieldRef<"Variants", 'TextColor'>
    readonly rgb: FieldRef<"Variants", 'String'>
    readonly stock: FieldRef<"Variants", 'Int'>
    readonly createdAt: FieldRef<"Variants", 'DateTime'>
    readonly updatedAt: FieldRef<"Variants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Variants findUnique
   */
  export type VariantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where: VariantsWhereUniqueInput
  }

  /**
   * Variants findUniqueOrThrow
   */
  export type VariantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where: VariantsWhereUniqueInput
  }

  /**
   * Variants findFirst
   */
  export type VariantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Variants findFirstOrThrow
   */
  export type VariantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Variants findMany
   */
  export type VariantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number | $Types.Skip
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Variants create
   */
  export type VariantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Variants.
     */
    data: XOR<VariantsCreateInput, VariantsUncheckedCreateInput>
  }

  /**
   * Variants createMany
   */
  export type VariantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantsCreateManyInput | VariantsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Variants createManyAndReturn
   */
  export type VariantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * The data used to create many Variants.
     */
    data: VariantsCreateManyInput | VariantsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variants update
   */
  export type VariantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Variants.
     */
    data: XOR<VariantsUpdateInput, VariantsUncheckedUpdateInput>
    /**
     * Choose, which Variants to update.
     */
    where: VariantsWhereUniqueInput
  }

  /**
   * Variants updateMany
   */
  export type VariantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantsUpdateManyMutationInput, VariantsUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantsWhereInput | $Types.Skip
    /**
     * Limit how many Variants to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Variants updateManyAndReturn
   */
  export type VariantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantsUpdateManyMutationInput, VariantsUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantsWhereInput | $Types.Skip
    /**
     * Limit how many Variants to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variants upsert
   */
  export type VariantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Variants to update in case it exists.
     */
    where: VariantsWhereUniqueInput
    /**
     * In case the Variants found by the `where` argument doesn't exist, create a new Variants with this data.
     */
    create: XOR<VariantsCreateInput, VariantsUncheckedCreateInput>
    /**
     * In case the Variants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantsUpdateInput, VariantsUncheckedUpdateInput>
  }

  /**
   * Variants delete
   */
  export type VariantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    /**
     * Filter which Variants to delete.
     */
    where: VariantsWhereUniqueInput
  }

  /**
   * Variants deleteMany
   */
  export type VariantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantsWhereInput | $Types.Skip
    /**
     * Limit how many Variants to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Variants.file
   */
  export type Variants$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    where?: FilesWhereInput | $Types.Skip
  }

  /**
   * Variants.orderDetails
   */
  export type Variants$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput | $Types.Skip
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderDetailsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Variants.cartDetails
   */
  export type Variants$cartDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    where?: CartDetailsWhereInput | $Types.Skip
    orderBy?: CartDetailsOrderByWithRelationInput | CartDetailsOrderByWithRelationInput[] | $Types.Skip
    cursor?: CartDetailsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CartDetailsScalarFieldEnum | CartDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Variants without action
   */
  export type VariantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
  }


  /**
   * Model Files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesMinAggregateOutputType = {
    id: string | null
    key: string | null
    file_url: string | null
  }

  export type FilesMaxAggregateOutputType = {
    id: string | null
    key: string | null
    file_url: string | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    key: number
    file_url: number
    _all: number
  }


  export type FilesMinAggregateInputType = {
    id?: true | $Types.Skip
    key?: true | $Types.Skip
    file_url?: true | $Types.Skip
  }

  export type FilesMaxAggregateInputType = {
    id?: true | $Types.Skip
    key?: true | $Types.Skip
    file_url?: true | $Types.Skip
  }

  export type FilesCountAggregateInputType = {
    id?: true | $Types.Skip
    key?: true | $Types.Skip
    file_url?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to aggregate.
     */
    where?: FilesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type FilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput | $Types.Skip
    orderBy?: FilesOrderByWithAggregationInput | FilesOrderByWithAggregationInput[] | $Types.Skip
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: FilesScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: FilesCountAggregateInputType | true
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: string
    key: string
    file_url: string | null
    _count: FilesCountAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends FilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type FilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    key?: boolean | $Types.Skip
    file_url?: boolean | $Types.Skip
    variants?: boolean | Files$variantsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | FilesCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["files"]>

  export type FilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    key?: boolean | $Types.Skip
    file_url?: boolean | $Types.Skip
  }, ExtArgs["result"]["files"]>

  export type FilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    key?: boolean | $Types.Skip
    file_url?: boolean | $Types.Skip
  }, ExtArgs["result"]["files"]>

  export type FilesSelectScalar = {
    id?: boolean | $Types.Skip
    key?: boolean | $Types.Skip
    file_url?: boolean | $Types.Skip
  }

  export type FilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "file_url", ExtArgs["result"]["files"], $Types.Skip>
  export type FilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | Files$variantsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | FilesCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type FilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Files"
    objects: {
      variants: Prisma.$VariantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      file_url: string | null
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type FilesGetPayload<S extends boolean | null | undefined | FilesDefaultArgs> = $Result.GetResult<Prisma.$FilesPayload, S>

  type FilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface FilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Files'], meta: { name: 'Files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {FilesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilesFindUniqueArgs>(args: SelectSubset<T, FilesFindUniqueArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilesFindUniqueOrThrowArgs>(args: SelectSubset<T, FilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilesFindFirstArgs>(args?: SelectSubset<T, FilesFindFirstArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilesFindFirstOrThrowArgs>(args?: SelectSubset<T, FilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilesFindManyArgs>(args?: SelectSubset<T, FilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {FilesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends FilesCreateArgs>(args: SelectSubset<T, FilesCreateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FilesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilesCreateManyArgs>(args?: SelectSubset<T, FilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FilesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilesCreateManyAndReturnArgs>(args?: SelectSubset<T, FilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {FilesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends FilesDeleteArgs>(args: SelectSubset<T, FilesDeleteArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {FilesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilesUpdateArgs>(args: SelectSubset<T, FilesUpdateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FilesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilesDeleteManyArgs>(args?: SelectSubset<T, FilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilesUpdateManyArgs>(args: SelectSubset<T, FilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FilesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilesUpdateManyAndReturnArgs>(args: SelectSubset<T, FilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {FilesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends FilesUpsertArgs>(args: SelectSubset<T, FilesUpsertArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FilesCountArgs>(
      args?: Subset<T, FilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilesGroupByArgs['orderBy'] }
        : { orderBy?: FilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Files model
   */
  readonly fields: FilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends Files$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Files$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Files model
   */
  interface FilesFieldRefs {
    readonly id: FieldRef<"Files", 'String'>
    readonly key: FieldRef<"Files", 'String'>
    readonly file_url: FieldRef<"Files", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Files findUnique
   */
  export type FilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findUniqueOrThrow
   */
  export type FilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findFirst
   */
  export type FilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Files findFirstOrThrow
   */
  export type FilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Files findMany
   */
  export type FilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FilesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number | $Types.Skip
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Files create
   */
  export type FilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Files.
     */
    data?: XOR<FilesCreateInput, FilesUncheckedCreateInput> | $Types.Skip
  }

  /**
   * Files createMany
   */
  export type FilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Files createManyAndReturn
   */
  export type FilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Files update
   */
  export type FilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Files.
     */
    data: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
    /**
     * Choose, which Files to update.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files updateMany
   */
  export type FilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput | $Types.Skip
    /**
     * Limit how many Files to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Files updateManyAndReturn
   */
  export type FilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput | $Types.Skip
    /**
     * Limit how many Files to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Files upsert
   */
  export type FilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Files to update in case it exists.
     */
    where: FilesWhereUniqueInput
    /**
     * In case the Files found by the `where` argument doesn't exist, create a new Files with this data.
     */
    create: XOR<FilesCreateInput, FilesUncheckedCreateInput>
    /**
     * In case the Files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
  }

  /**
   * Files delete
   */
  export type FilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter which Files to delete.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files deleteMany
   */
  export type FilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FilesWhereInput | $Types.Skip
    /**
     * Limit how many Files to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Files.variants
   */
  export type Files$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variants
     */
    select?: VariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variants
     */
    omit?: VariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantsInclude<ExtArgs> | null
    where?: VariantsWhereInput | $Types.Skip
    orderBy?: VariantsOrderByWithRelationInput | VariantsOrderByWithRelationInput[] | $Types.Skip
    cursor?: VariantsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Files without action
   */
  export type FilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    parentId: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    parentId: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    parentId: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    parentId?: true | $Types.Skip
    active?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    parentId?: true | $Types.Skip
    active?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CategoriesCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    parentId?: true | $Types.Skip
    active?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput | $Types.Skip
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[] | $Types.Skip
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    name: string
    parentId: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    active?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    parent?: boolean | Categories$parentArgs<ExtArgs> | $Types.Skip
    productCategories?: boolean | Categories$productCategoriesArgs<ExtArgs> | $Types.Skip
    Categories?: boolean | Categories$CategoriesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    active?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    parent?: boolean | Categories$parentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    active?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    parent?: boolean | Categories$parentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    active?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parentId" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"], $Types.Skip>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Categories$parentArgs<ExtArgs> | $Types.Skip
    productCategories?: boolean | Categories$productCategoriesArgs<ExtArgs> | $Types.Skip
    Categories?: boolean | Categories$CategoriesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Categories$parentArgs<ExtArgs> | $Types.Skip
  }
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Categories$parentArgs<ExtArgs> | $Types.Skip
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      parent: Prisma.$CategoriesPayload<ExtArgs> | null
      productCategories: Prisma.$ProductCategoriesPayload<ExtArgs>[]
      Categories: Prisma.$CategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      parentId: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Categories$parentArgs<ExtArgs> = {}>(args?: Subset<T, Categories$parentArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productCategories<T extends Categories$productCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$productCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Categories<T extends Categories$CategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$CategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'String'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly parentId: FieldRef<"Categories", 'String'>
    readonly active: FieldRef<"Categories", 'Boolean'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number | $Types.Skip
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput | $Types.Skip
    /**
     * Limit how many Categories to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput | $Types.Skip
    /**
     * Limit how many Categories to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput | $Types.Skip
    /**
     * Limit how many Categories to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Categories.parent
   */
  export type Categories$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput | $Types.Skip
  }

  /**
   * Categories.productCategories
   */
  export type Categories$productCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    where?: ProductCategoriesWhereInput | $Types.Skip
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProductCategoriesWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Categories.Categories
   */
  export type Categories$CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput | $Types.Skip
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[] | $Types.Skip
    cursor?: CategoriesWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategories
   */

  export type AggregateProductCategories = {
    _count: ProductCategoriesCountAggregateOutputType | null
    _min: ProductCategoriesMinAggregateOutputType | null
    _max: ProductCategoriesMaxAggregateOutputType | null
  }

  export type ProductCategoriesMinAggregateOutputType = {
    productId: string | null
    categoryId: string | null
  }

  export type ProductCategoriesMaxAggregateOutputType = {
    productId: string | null
    categoryId: string | null
  }

  export type ProductCategoriesCountAggregateOutputType = {
    productId: number
    categoryId: number
    _all: number
  }


  export type ProductCategoriesMinAggregateInputType = {
    productId?: true | $Types.Skip
    categoryId?: true | $Types.Skip
  }

  export type ProductCategoriesMaxAggregateInputType = {
    productId?: true | $Types.Skip
    categoryId?: true | $Types.Skip
  }

  export type ProductCategoriesCountAggregateInputType = {
    productId?: true | $Types.Skip
    categoryId?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ProductCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to aggregate.
     */
    where?: ProductCategoriesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoriesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoriesMaxAggregateInputType
  }

  export type GetProductCategoriesAggregateType<T extends ProductCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategories[P]>
      : GetScalarType<T[P], AggregateProductCategories[P]>
  }




  export type ProductCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoriesWhereInput | $Types.Skip
    orderBy?: ProductCategoriesOrderByWithAggregationInput | ProductCategoriesOrderByWithAggregationInput[] | $Types.Skip
    by: ProductCategoriesScalarFieldEnum[] | ProductCategoriesScalarFieldEnum
    having?: ProductCategoriesScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ProductCategoriesCountAggregateInputType | true
    _min?: ProductCategoriesMinAggregateInputType
    _max?: ProductCategoriesMaxAggregateInputType
  }

  export type ProductCategoriesGroupByOutputType = {
    productId: string
    categoryId: string
    _count: ProductCategoriesCountAggregateOutputType | null
    _min: ProductCategoriesMinAggregateOutputType | null
    _max: ProductCategoriesMaxAggregateOutputType | null
  }

  type GetProductCategoriesGroupByPayload<T extends ProductCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean | $Types.Skip
    categoryId?: boolean | $Types.Skip
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    categories?: boolean | CategoriesDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["productCategories"]>

  export type ProductCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean | $Types.Skip
    categoryId?: boolean | $Types.Skip
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    categories?: boolean | CategoriesDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["productCategories"]>

  export type ProductCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean | $Types.Skip
    categoryId?: boolean | $Types.Skip
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    categories?: boolean | CategoriesDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["productCategories"]>

  export type ProductCategoriesSelectScalar = {
    productId?: boolean | $Types.Skip
    categoryId?: boolean | $Types.Skip
  }

  export type ProductCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "categoryId", ExtArgs["result"]["productCategories"], $Types.Skip>
  export type ProductCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    categories?: boolean | CategoriesDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProductCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    categories?: boolean | CategoriesDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProductCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    categories?: boolean | CategoriesDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ProductCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategories"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>
      categories: Prisma.$CategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      categoryId: string
    }, ExtArgs["result"]["productCategories"]>
    composites: {}
  }

  type ProductCategoriesGetPayload<S extends boolean | null | undefined | ProductCategoriesDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoriesPayload, S>

  type ProductCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoriesCountAggregateInputType | true
    }

  export interface ProductCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategories'], meta: { name: 'ProductCategories' } }
    /**
     * Find zero or one ProductCategories that matches the filter.
     * @param {ProductCategoriesFindUniqueArgs} args - Arguments to find a ProductCategories
     * @example
     * // Get one ProductCategories
     * const productCategories = await prisma.productCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoriesFindUniqueArgs>(args: SelectSubset<T, ProductCategoriesFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoriesFindUniqueOrThrowArgs} args - Arguments to find a ProductCategories
     * @example
     * // Get one ProductCategories
     * const productCategories = await prisma.productCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesFindFirstArgs} args - Arguments to find a ProductCategories
     * @example
     * // Get one ProductCategories
     * const productCategories = await prisma.productCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoriesFindFirstArgs>(args?: SelectSubset<T, ProductCategoriesFindFirstArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesFindFirstOrThrowArgs} args - Arguments to find a ProductCategories
     * @example
     * // Get one ProductCategories
     * const productCategories = await prisma.productCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategories.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategories.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productCategoriesWithProductIdOnly = await prisma.productCategories.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends ProductCategoriesFindManyArgs>(args?: SelectSubset<T, ProductCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategories.
     * @param {ProductCategoriesCreateArgs} args - Arguments to create a ProductCategories.
     * @example
     * // Create one ProductCategories
     * const ProductCategories = await prisma.productCategories.create({
     *   data: {
     *     // ... data to create a ProductCategories
     *   }
     * })
     * 
     */
    create<T extends ProductCategoriesCreateArgs>(args: SelectSubset<T, ProductCategoriesCreateArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoriesCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategories = await prisma.productCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoriesCreateManyArgs>(args?: SelectSubset<T, ProductCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCategories and returns the data saved in the database.
     * @param {ProductCategoriesCreateManyAndReturnArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategories = await prisma.productCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCategories and only return the `productId`
     * const productCategoriesWithProductIdOnly = await prisma.productCategories.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCategories.
     * @param {ProductCategoriesDeleteArgs} args - Arguments to delete one ProductCategories.
     * @example
     * // Delete one ProductCategories
     * const ProductCategories = await prisma.productCategories.delete({
     *   where: {
     *     // ... filter to delete one ProductCategories
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoriesDeleteArgs>(args: SelectSubset<T, ProductCategoriesDeleteArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategories.
     * @param {ProductCategoriesUpdateArgs} args - Arguments to update one ProductCategories.
     * @example
     * // Update one ProductCategories
     * const productCategories = await prisma.productCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoriesUpdateArgs>(args: SelectSubset<T, ProductCategoriesUpdateArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoriesDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoriesDeleteManyArgs>(args?: SelectSubset<T, ProductCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategories = await prisma.productCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoriesUpdateManyArgs>(args: SelectSubset<T, ProductCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories and returns the data updated in the database.
     * @param {ProductCategoriesUpdateManyAndReturnArgs} args - Arguments to update many ProductCategories.
     * @example
     * // Update many ProductCategories
     * const productCategories = await prisma.productCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCategories and only return the `productId`
     * const productCategoriesWithProductIdOnly = await prisma.productCategories.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCategories.
     * @param {ProductCategoriesUpsertArgs} args - Arguments to update or create a ProductCategories.
     * @example
     * // Update or create a ProductCategories
     * const productCategories = await prisma.productCategories.upsert({
     *   create: {
     *     // ... data to create a ProductCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategories we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoriesUpsertArgs>(args: SelectSubset<T, ProductCategoriesUpsertArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategories.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoriesCountArgs>(
      args?: Subset<T, ProductCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCategoriesAggregateArgs>(args: Subset<T, ProductCategoriesAggregateArgs>): Prisma.PrismaPromise<GetProductCategoriesAggregateType<T>>

    /**
     * Group by ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategories model
   */
  readonly fields: ProductCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategories model
   */
  interface ProductCategoriesFieldRefs {
    readonly productId: FieldRef<"ProductCategories", 'String'>
    readonly categoryId: FieldRef<"ProductCategories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategories findUnique
   */
  export type ProductCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where: ProductCategoriesWhereUniqueInput
  }

  /**
   * ProductCategories findUniqueOrThrow
   */
  export type ProductCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where: ProductCategoriesWhereUniqueInput
  }

  /**
   * ProductCategories findFirst
   */
  export type ProductCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoriesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoriesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProductCategories findFirstOrThrow
   */
  export type ProductCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoriesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoriesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProductCategories findMany
   */
  export type ProductCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoriesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoriesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number | $Types.Skip
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProductCategories create
   */
  export type ProductCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategories.
     */
    data: XOR<ProductCategoriesCreateInput, ProductCategoriesUncheckedCreateInput>
  }

  /**
   * ProductCategories createMany
   */
  export type ProductCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoriesCreateManyInput | ProductCategoriesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * ProductCategories createManyAndReturn
   */
  export type ProductCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoriesCreateManyInput | ProductCategoriesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCategories update
   */
  export type ProductCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategories.
     */
    data: XOR<ProductCategoriesUpdateInput, ProductCategoriesUncheckedUpdateInput>
    /**
     * Choose, which ProductCategories to update.
     */
    where: ProductCategoriesWhereUniqueInput
  }

  /**
   * ProductCategories updateMany
   */
  export type ProductCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoriesUpdateManyMutationInput, ProductCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoriesWhereInput | $Types.Skip
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * ProductCategories updateManyAndReturn
   */
  export type ProductCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoriesUpdateManyMutationInput, ProductCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoriesWhereInput | $Types.Skip
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCategories upsert
   */
  export type ProductCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategories to update in case it exists.
     */
    where: ProductCategoriesWhereUniqueInput
    /**
     * In case the ProductCategories found by the `where` argument doesn't exist, create a new ProductCategories with this data.
     */
    create: XOR<ProductCategoriesCreateInput, ProductCategoriesUncheckedCreateInput>
    /**
     * In case the ProductCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoriesUpdateInput, ProductCategoriesUncheckedUpdateInput>
  }

  /**
   * ProductCategories delete
   */
  export type ProductCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter which ProductCategories to delete.
     */
    where: ProductCategoriesWhereUniqueInput
  }

  /**
   * ProductCategories deleteMany
   */
  export type ProductCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoriesWhereInput | $Types.Skip
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * ProductCategories without action
   */
  export type ProductCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    productId: string | null
    user_id: string | null
  }

  export type LikesMaxAggregateOutputType = {
    productId: string | null
    user_id: string | null
  }

  export type LikesCountAggregateOutputType = {
    productId: number
    user_id: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    productId?: true | $Types.Skip
    user_id?: true | $Types.Skip
  }

  export type LikesMaxAggregateInputType = {
    productId?: true | $Types.Skip
    user_id?: true | $Types.Skip
  }

  export type LikesCountAggregateInputType = {
    productId?: true | $Types.Skip
    user_id?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput | $Types.Skip
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[] | $Types.Skip
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    productId: string
    user_id: string
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectScalar = {
    productId?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
  }

  export type LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "user_id", ExtArgs["result"]["likes"], $Types.Skip>
  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type LikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type LikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: string
      user_id: string
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const likesWithProductIdOnly = await prisma.likes.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `productId`
     * const likesWithProductIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikesCreateManyAndReturnArgs>(args?: SelectSubset<T, LikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `productId`
     * const likesWithProductIdOnly = await prisma.likes.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikesUpdateManyAndReturnArgs>(args: SelectSubset<T, LikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly productId: FieldRef<"Likes", 'String'>
    readonly user_id: FieldRef<"Likes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number | $Types.Skip
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Likes createManyAndReturn
   */
  export type LikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput | $Types.Skip
    /**
     * Limit how many Likes to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Likes updateManyAndReturn
   */
  export type LikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput | $Types.Skip
    /**
     * Limit how many Likes to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput | $Types.Skip
    /**
     * Limit how many Likes to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model CartDetails
   */

  export type AggregateCartDetails = {
    _count: CartDetailsCountAggregateOutputType | null
    _avg: CartDetailsAvgAggregateOutputType | null
    _sum: CartDetailsSumAggregateOutputType | null
    _min: CartDetailsMinAggregateOutputType | null
    _max: CartDetailsMaxAggregateOutputType | null
  }

  export type CartDetailsAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type CartDetailsSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type CartDetailsMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: number | null
    variant_id: string | null
    cart_id: string | null
  }

  export type CartDetailsMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: number | null
    variant_id: string | null
    cart_id: string | null
  }

  export type CartDetailsCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    variant_id: number
    cart_id: number
    _all: number
  }


  export type CartDetailsAvgAggregateInputType = {
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type CartDetailsSumAggregateInputType = {
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type CartDetailsMinAggregateInputType = {
    id?: true | $Types.Skip
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
    variant_id?: true | $Types.Skip
    cart_id?: true | $Types.Skip
  }

  export type CartDetailsMaxAggregateInputType = {
    id?: true | $Types.Skip
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
    variant_id?: true | $Types.Skip
    cart_id?: true | $Types.Skip
  }

  export type CartDetailsCountAggregateInputType = {
    id?: true | $Types.Skip
    quantity?: true | $Types.Skip
    price?: true | $Types.Skip
    variant_id?: true | $Types.Skip
    cart_id?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CartDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartDetails to aggregate.
     */
    where?: CartDetailsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartDetails to fetch.
     */
    orderBy?: CartDetailsOrderByWithRelationInput | CartDetailsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartDetailsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartDetails from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartDetails.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartDetails
    **/
    _count?: true | CartDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartDetailsMaxAggregateInputType
  }

  export type GetCartDetailsAggregateType<T extends CartDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateCartDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartDetails[P]>
      : GetScalarType<T[P], AggregateCartDetails[P]>
  }




  export type CartDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartDetailsWhereInput | $Types.Skip
    orderBy?: CartDetailsOrderByWithAggregationInput | CartDetailsOrderByWithAggregationInput[] | $Types.Skip
    by: CartDetailsScalarFieldEnum[] | CartDetailsScalarFieldEnum
    having?: CartDetailsScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CartDetailsCountAggregateInputType | true
    _avg?: CartDetailsAvgAggregateInputType
    _sum?: CartDetailsSumAggregateInputType
    _min?: CartDetailsMinAggregateInputType
    _max?: CartDetailsMaxAggregateInputType
  }

  export type CartDetailsGroupByOutputType = {
    id: string
    quantity: number
    price: number
    variant_id: string
    cart_id: string
    _count: CartDetailsCountAggregateOutputType | null
    _avg: CartDetailsAvgAggregateOutputType | null
    _sum: CartDetailsSumAggregateOutputType | null
    _min: CartDetailsMinAggregateOutputType | null
    _max: CartDetailsMaxAggregateOutputType | null
  }

  type GetCartDetailsGroupByPayload<T extends CartDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], CartDetailsGroupByOutputType[P]>
        }
      >
    >


  export type CartDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    variant_id?: boolean | $Types.Skip
    cart_id?: boolean | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
    cart?: boolean | CartsDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cartDetails"]>

  export type CartDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    variant_id?: boolean | $Types.Skip
    cart_id?: boolean | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
    cart?: boolean | CartsDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cartDetails"]>

  export type CartDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    variant_id?: boolean | $Types.Skip
    cart_id?: boolean | $Types.Skip
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
    cart?: boolean | CartsDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cartDetails"]>

  export type CartDetailsSelectScalar = {
    id?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    variant_id?: boolean | $Types.Skip
    cart_id?: boolean | $Types.Skip
  }

  export type CartDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "variant_id" | "cart_id", ExtArgs["result"]["cartDetails"], $Types.Skip>
  export type CartDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
    cart?: boolean | CartsDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CartDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
    cart?: boolean | CartsDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CartDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | VariantsDefaultArgs<ExtArgs> | $Types.Skip
    cart?: boolean | CartsDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $CartDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartDetails"
    objects: {
      variants: Prisma.$VariantsPayload<ExtArgs>
      cart: Prisma.$CartsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      price: number
      variant_id: string
      cart_id: string
    }, ExtArgs["result"]["cartDetails"]>
    composites: {}
  }

  type CartDetailsGetPayload<S extends boolean | null | undefined | CartDetailsDefaultArgs> = $Result.GetResult<Prisma.$CartDetailsPayload, S>

  type CartDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartDetailsCountAggregateInputType | true
    }

  export interface CartDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartDetails'], meta: { name: 'CartDetails' } }
    /**
     * Find zero or one CartDetails that matches the filter.
     * @param {CartDetailsFindUniqueArgs} args - Arguments to find a CartDetails
     * @example
     * // Get one CartDetails
     * const cartDetails = await prisma.cartDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartDetailsFindUniqueArgs>(args: SelectSubset<T, CartDetailsFindUniqueArgs<ExtArgs>>): Prisma__CartDetailsClient<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartDetailsFindUniqueOrThrowArgs} args - Arguments to find a CartDetails
     * @example
     * // Get one CartDetails
     * const cartDetails = await prisma.cartDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartDetailsClient<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartDetailsFindFirstArgs} args - Arguments to find a CartDetails
     * @example
     * // Get one CartDetails
     * const cartDetails = await prisma.cartDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartDetailsFindFirstArgs>(args?: SelectSubset<T, CartDetailsFindFirstArgs<ExtArgs>>): Prisma__CartDetailsClient<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartDetailsFindFirstOrThrowArgs} args - Arguments to find a CartDetails
     * @example
     * // Get one CartDetails
     * const cartDetails = await prisma.cartDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartDetailsClient<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartDetails
     * const cartDetails = await prisma.cartDetails.findMany()
     * 
     * // Get first 10 CartDetails
     * const cartDetails = await prisma.cartDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartDetailsWithIdOnly = await prisma.cartDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartDetailsFindManyArgs>(args?: SelectSubset<T, CartDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartDetails.
     * @param {CartDetailsCreateArgs} args - Arguments to create a CartDetails.
     * @example
     * // Create one CartDetails
     * const CartDetails = await prisma.cartDetails.create({
     *   data: {
     *     // ... data to create a CartDetails
     *   }
     * })
     * 
     */
    create<T extends CartDetailsCreateArgs>(args: SelectSubset<T, CartDetailsCreateArgs<ExtArgs>>): Prisma__CartDetailsClient<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartDetails.
     * @param {CartDetailsCreateManyArgs} args - Arguments to create many CartDetails.
     * @example
     * // Create many CartDetails
     * const cartDetails = await prisma.cartDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartDetailsCreateManyArgs>(args?: SelectSubset<T, CartDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartDetails and returns the data saved in the database.
     * @param {CartDetailsCreateManyAndReturnArgs} args - Arguments to create many CartDetails.
     * @example
     * // Create many CartDetails
     * const cartDetails = await prisma.cartDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartDetails and only return the `id`
     * const cartDetailsWithIdOnly = await prisma.cartDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartDetails.
     * @param {CartDetailsDeleteArgs} args - Arguments to delete one CartDetails.
     * @example
     * // Delete one CartDetails
     * const CartDetails = await prisma.cartDetails.delete({
     *   where: {
     *     // ... filter to delete one CartDetails
     *   }
     * })
     * 
     */
    delete<T extends CartDetailsDeleteArgs>(args: SelectSubset<T, CartDetailsDeleteArgs<ExtArgs>>): Prisma__CartDetailsClient<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartDetails.
     * @param {CartDetailsUpdateArgs} args - Arguments to update one CartDetails.
     * @example
     * // Update one CartDetails
     * const cartDetails = await prisma.cartDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartDetailsUpdateArgs>(args: SelectSubset<T, CartDetailsUpdateArgs<ExtArgs>>): Prisma__CartDetailsClient<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartDetails.
     * @param {CartDetailsDeleteManyArgs} args - Arguments to filter CartDetails to delete.
     * @example
     * // Delete a few CartDetails
     * const { count } = await prisma.cartDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDetailsDeleteManyArgs>(args?: SelectSubset<T, CartDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartDetails
     * const cartDetails = await prisma.cartDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartDetailsUpdateManyArgs>(args: SelectSubset<T, CartDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartDetails and returns the data updated in the database.
     * @param {CartDetailsUpdateManyAndReturnArgs} args - Arguments to update many CartDetails.
     * @example
     * // Update many CartDetails
     * const cartDetails = await prisma.cartDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartDetails and only return the `id`
     * const cartDetailsWithIdOnly = await prisma.cartDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartDetails.
     * @param {CartDetailsUpsertArgs} args - Arguments to update or create a CartDetails.
     * @example
     * // Update or create a CartDetails
     * const cartDetails = await prisma.cartDetails.upsert({
     *   create: {
     *     // ... data to create a CartDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartDetails we want to update
     *   }
     * })
     */
    upsert<T extends CartDetailsUpsertArgs>(args: SelectSubset<T, CartDetailsUpsertArgs<ExtArgs>>): Prisma__CartDetailsClient<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartDetailsCountArgs} args - Arguments to filter CartDetails to count.
     * @example
     * // Count the number of CartDetails
     * const count = await prisma.cartDetails.count({
     *   where: {
     *     // ... the filter for the CartDetails we want to count
     *   }
     * })
    **/
    count<T extends CartDetailsCountArgs>(
      args?: Subset<T, CartDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartDetailsAggregateArgs>(args: Subset<T, CartDetailsAggregateArgs>): Prisma.PrismaPromise<GetCartDetailsAggregateType<T>>

    /**
     * Group by CartDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartDetailsGroupByArgs['orderBy'] }
        : { orderBy?: CartDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartDetails model
   */
  readonly fields: CartDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends VariantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariantsDefaultArgs<ExtArgs>>): Prisma__VariantsClient<$Result.GetResult<Prisma.$VariantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart<T extends CartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartsDefaultArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartDetails model
   */
  interface CartDetailsFieldRefs {
    readonly id: FieldRef<"CartDetails", 'String'>
    readonly quantity: FieldRef<"CartDetails", 'Int'>
    readonly price: FieldRef<"CartDetails", 'Float'>
    readonly variant_id: FieldRef<"CartDetails", 'String'>
    readonly cart_id: FieldRef<"CartDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CartDetails findUnique
   */
  export type CartDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CartDetails to fetch.
     */
    where: CartDetailsWhereUniqueInput
  }

  /**
   * CartDetails findUniqueOrThrow
   */
  export type CartDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CartDetails to fetch.
     */
    where: CartDetailsWhereUniqueInput
  }

  /**
   * CartDetails findFirst
   */
  export type CartDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CartDetails to fetch.
     */
    where?: CartDetailsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartDetails to fetch.
     */
    orderBy?: CartDetailsOrderByWithRelationInput | CartDetailsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartDetails.
     */
    cursor?: CartDetailsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartDetails from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartDetails.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartDetails.
     */
    distinct?: CartDetailsScalarFieldEnum | CartDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CartDetails findFirstOrThrow
   */
  export type CartDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CartDetails to fetch.
     */
    where?: CartDetailsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartDetails to fetch.
     */
    orderBy?: CartDetailsOrderByWithRelationInput | CartDetailsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartDetails.
     */
    cursor?: CartDetailsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartDetails from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartDetails.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartDetails.
     */
    distinct?: CartDetailsScalarFieldEnum | CartDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CartDetails findMany
   */
  export type CartDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CartDetails to fetch.
     */
    where?: CartDetailsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartDetails to fetch.
     */
    orderBy?: CartDetailsOrderByWithRelationInput | CartDetailsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartDetails.
     */
    cursor?: CartDetailsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartDetails from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartDetails.
     */
    skip?: number | $Types.Skip
    distinct?: CartDetailsScalarFieldEnum | CartDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CartDetails create
   */
  export type CartDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a CartDetails.
     */
    data: XOR<CartDetailsCreateInput, CartDetailsUncheckedCreateInput>
  }

  /**
   * CartDetails createMany
   */
  export type CartDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartDetails.
     */
    data: CartDetailsCreateManyInput | CartDetailsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * CartDetails createManyAndReturn
   */
  export type CartDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many CartDetails.
     */
    data: CartDetailsCreateManyInput | CartDetailsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartDetails update
   */
  export type CartDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a CartDetails.
     */
    data: XOR<CartDetailsUpdateInput, CartDetailsUncheckedUpdateInput>
    /**
     * Choose, which CartDetails to update.
     */
    where: CartDetailsWhereUniqueInput
  }

  /**
   * CartDetails updateMany
   */
  export type CartDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartDetails.
     */
    data: XOR<CartDetailsUpdateManyMutationInput, CartDetailsUncheckedUpdateManyInput>
    /**
     * Filter which CartDetails to update
     */
    where?: CartDetailsWhereInput | $Types.Skip
    /**
     * Limit how many CartDetails to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * CartDetails updateManyAndReturn
   */
  export type CartDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * The data used to update CartDetails.
     */
    data: XOR<CartDetailsUpdateManyMutationInput, CartDetailsUncheckedUpdateManyInput>
    /**
     * Filter which CartDetails to update
     */
    where?: CartDetailsWhereInput | $Types.Skip
    /**
     * Limit how many CartDetails to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartDetails upsert
   */
  export type CartDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the CartDetails to update in case it exists.
     */
    where: CartDetailsWhereUniqueInput
    /**
     * In case the CartDetails found by the `where` argument doesn't exist, create a new CartDetails with this data.
     */
    create: XOR<CartDetailsCreateInput, CartDetailsUncheckedCreateInput>
    /**
     * In case the CartDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartDetailsUpdateInput, CartDetailsUncheckedUpdateInput>
  }

  /**
   * CartDetails delete
   */
  export type CartDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    /**
     * Filter which CartDetails to delete.
     */
    where: CartDetailsWhereUniqueInput
  }

  /**
   * CartDetails deleteMany
   */
  export type CartDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartDetails to delete
     */
    where?: CartDetailsWhereInput | $Types.Skip
    /**
     * Limit how many CartDetails to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * CartDetails without action
   */
  export type CartDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartsMinAggregateInputType = {
    id?: true | $Types.Skip
    user_id?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CartsMaxAggregateInputType = {
    id?: true | $Types.Skip
    user_id?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CartsCountAggregateInputType = {
    id?: true | $Types.Skip
    user_id?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to aggregate.
     */
    where?: CartsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type CartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput | $Types.Skip
    orderBy?: CartsOrderByWithAggregationInput | CartsOrderByWithAggregationInput[] | $Types.Skip
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: CartsScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CartsCountAggregateInputType | true
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: string
    user_id: string
    createdAt: Date
    updatedAt: Date
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends CartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type CartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    cartDetails?: boolean | Carts$cartDetailsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectScalar = {
    id?: boolean | $Types.Skip
    user_id?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type CartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "createdAt" | "updatedAt", ExtArgs["result"]["carts"], $Types.Skip>
  export type CartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
    cartDetails?: boolean | Carts$cartDetailsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $CartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      cartDetails: Prisma.$CartDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type CartsGetPayload<S extends boolean | null | undefined | CartsDefaultArgs> = $Result.GetResult<Prisma.$CartsPayload, S>

  type CartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface CartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carts'], meta: { name: 'Carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {CartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsFindUniqueArgs>(args: SelectSubset<T, CartsFindUniqueArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsFindFirstArgs>(args?: SelectSubset<T, CartsFindFirstArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartsFindManyArgs>(args?: SelectSubset<T, CartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {CartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends CartsCreateArgs>(args: SelectSubset<T, CartsCreateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartsCreateManyArgs>(args?: SelectSubset<T, CartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {CartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends CartsDeleteArgs>(args: SelectSubset<T, CartsDeleteArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {CartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartsUpdateArgs>(args: SelectSubset<T, CartsUpdateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartsDeleteManyArgs>(args?: SelectSubset<T, CartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartsUpdateManyArgs>(args: SelectSubset<T, CartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {CartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends CartsUpsertArgs>(args: SelectSubset<T, CartsUpsertArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartsCountArgs>(
      args?: Subset<T, CartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsGroupByArgs['orderBy'] }
        : { orderBy?: CartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carts model
   */
  readonly fields: CartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartDetails<T extends Carts$cartDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Carts$cartDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carts model
   */
  interface CartsFieldRefs {
    readonly id: FieldRef<"Carts", 'String'>
    readonly user_id: FieldRef<"Carts", 'String'>
    readonly createdAt: FieldRef<"Carts", 'DateTime'>
    readonly updatedAt: FieldRef<"Carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Carts findUnique
   */
  export type CartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findUniqueOrThrow
   */
  export type CartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findFirst
   */
  export type CartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Carts findFirstOrThrow
   */
  export type CartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Carts findMany
   */
  export type CartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number | $Types.Skip
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Carts create
   */
  export type CartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to create a Carts.
     */
    data: XOR<CartsCreateInput, CartsUncheckedCreateInput>
  }

  /**
   * Carts createMany
   */
  export type CartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Carts createManyAndReturn
   */
  export type CartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts update
   */
  export type CartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to update a Carts.
     */
    data: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
    /**
     * Choose, which Carts to update.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts updateMany
   */
  export type CartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput | $Types.Skip
    /**
     * Limit how many Carts to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Carts updateManyAndReturn
   */
  export type CartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput | $Types.Skip
    /**
     * Limit how many Carts to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts upsert
   */
  export type CartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The filter to search for the Carts to update in case it exists.
     */
    where: CartsWhereUniqueInput
    /**
     * In case the Carts found by the `where` argument doesn't exist, create a new Carts with this data.
     */
    create: XOR<CartsCreateInput, CartsUncheckedCreateInput>
    /**
     * In case the Carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
  }

  /**
   * Carts delete
   */
  export type CartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter which Carts to delete.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts deleteMany
   */
  export type CartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartsWhereInput | $Types.Skip
    /**
     * Limit how many Carts to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Carts.cartDetails
   */
  export type Carts$cartDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartDetails
     */
    select?: CartDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartDetails
     */
    omit?: CartDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartDetailsInclude<ExtArgs> | null
    where?: CartDetailsWhereInput | $Types.Skip
    orderBy?: CartDetailsOrderByWithRelationInput | CartDetailsOrderByWithRelationInput[] | $Types.Skip
    cursor?: CartDetailsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CartDetailsScalarFieldEnum | CartDetailsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Carts without action
   */
  export type CartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UserRolesScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRolesScalarFieldEnum = (typeof UserRolesScalarFieldEnum)[keyof typeof UserRolesScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    user_id: 'user_id'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status',
    amount: 'amount',
    currency: 'currency',
    receipt_url: 'receipt_url',
    payment_intent: 'payment_intent',
    orderId: 'orderId'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    orderDetails_id: 'orderDetails_id',
    variant_id: 'variant_id'
  };

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    created_at: 'created_at',
    updated_at: 'updated_at',
    active: 'active',
    brand_id: 'brand_id'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const BrandsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const VariantsScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    file_id: 'file_id',
    size: 'size',
    textColor: 'textColor',
    rgb: 'rgb',
    stock: 'stock',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VariantsScalarFieldEnum = (typeof VariantsScalarFieldEnum)[keyof typeof VariantsScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    key: 'key',
    file_url: 'file_url'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parentId: 'parentId',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductCategoriesScalarFieldEnum: {
    productId: 'productId',
    categoryId: 'categoryId'
  };

  export type ProductCategoriesScalarFieldEnum = (typeof ProductCategoriesScalarFieldEnum)[keyof typeof ProductCategoriesScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    productId: 'productId',
    user_id: 'user_id'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const CartDetailsScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    variant_id: 'variant_id',
    cart_id: 'cart_id'
  };

  export type CartDetailsScalarFieldEnum = (typeof CartDetailsScalarFieldEnum)[keyof typeof CartDetailsScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Size'
   */
  export type EnumSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Size'>
    


  /**
   * Reference to a field of type 'Size[]'
   */
  export type ListEnumSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Size[]'>
    


  /**
   * Reference to a field of type 'TextColor'
   */
  export type EnumTextColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TextColor'>
    


  /**
   * Reference to a field of type 'TextColor[]'
   */
  export type ListEnumTextColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TextColor[]'>
    
  /**
   * Deep Input Types
   */


  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[] | $Types.Skip
    OR?: RolesWhereInput[] | $Types.Skip
    NOT?: RolesWhereInput | RolesWhereInput[] | $Types.Skip
    id?: StringFilter<"Roles"> | string | $Types.Skip
    name?: StringFilter<"Roles"> | string | $Types.Skip
    users?: UserRolesListRelationFilter | $Types.Skip
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    users?: UserRolesOrderByRelationAggregateInput | $Types.Skip
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: RolesWhereInput | RolesWhereInput[] | $Types.Skip
    OR?: RolesWhereInput[] | $Types.Skip
    NOT?: RolesWhereInput | RolesWhereInput[] | $Types.Skip
    name?: StringFilter<"Roles"> | string | $Types.Skip
    users?: UserRolesListRelationFilter | $Types.Skip
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    _count?: RolesCountOrderByAggregateInput | $Types.Skip
    _max?: RolesMaxOrderByAggregateInput | $Types.Skip
    _min?: RolesMinOrderByAggregateInput | $Types.Skip
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: RolesScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Roles"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"Roles"> | string | $Types.Skip
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[] | $Types.Skip
    OR?: UsersWhereInput[] | $Types.Skip
    NOT?: UsersWhereInput | UsersWhereInput[] | $Types.Skip
    id?: StringFilter<"Users"> | string | $Types.Skip
    nickname?: StringFilter<"Users"> | string | $Types.Skip
    first_name?: StringFilter<"Users"> | string | $Types.Skip
    last_name?: StringFilter<"Users"> | string | $Types.Skip
    email?: StringFilter<"Users"> | string | $Types.Skip
    password?: StringFilter<"Users"> | string | $Types.Skip
    roles?: UserRolesListRelationFilter | $Types.Skip
    orders?: OrdersListRelationFilter | $Types.Skip
    likes?: LikesListRelationFilter | $Types.Skip
    carts?: CartsListRelationFilter | $Types.Skip
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    nickname?: SortOrder | $Types.Skip
    first_name?: SortOrder | $Types.Skip
    last_name?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    roles?: UserRolesOrderByRelationAggregateInput | $Types.Skip
    orders?: OrdersOrderByRelationAggregateInput | $Types.Skip
    likes?: LikesOrderByRelationAggregateInput | $Types.Skip
    carts?: CartsOrderByRelationAggregateInput | $Types.Skip
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    email?: string | $Types.Skip
    AND?: UsersWhereInput | UsersWhereInput[] | $Types.Skip
    OR?: UsersWhereInput[] | $Types.Skip
    NOT?: UsersWhereInput | UsersWhereInput[] | $Types.Skip
    nickname?: StringFilter<"Users"> | string | $Types.Skip
    first_name?: StringFilter<"Users"> | string | $Types.Skip
    last_name?: StringFilter<"Users"> | string | $Types.Skip
    password?: StringFilter<"Users"> | string | $Types.Skip
    roles?: UserRolesListRelationFilter | $Types.Skip
    orders?: OrdersListRelationFilter | $Types.Skip
    likes?: LikesListRelationFilter | $Types.Skip
    carts?: CartsListRelationFilter | $Types.Skip
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    nickname?: SortOrder | $Types.Skip
    first_name?: SortOrder | $Types.Skip
    last_name?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    _count?: UsersCountOrderByAggregateInput | $Types.Skip
    _max?: UsersMaxOrderByAggregateInput | $Types.Skip
    _min?: UsersMinOrderByAggregateInput | $Types.Skip
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UsersScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Users"> | string | $Types.Skip
    nickname?: StringWithAggregatesFilter<"Users"> | string | $Types.Skip
    first_name?: StringWithAggregatesFilter<"Users"> | string | $Types.Skip
    last_name?: StringWithAggregatesFilter<"Users"> | string | $Types.Skip
    email?: StringWithAggregatesFilter<"Users"> | string | $Types.Skip
    password?: StringWithAggregatesFilter<"Users"> | string | $Types.Skip
  }

  export type UserRolesWhereInput = {
    AND?: UserRolesWhereInput | UserRolesWhereInput[] | $Types.Skip
    OR?: UserRolesWhereInput[] | $Types.Skip
    NOT?: UserRolesWhereInput | UserRolesWhereInput[] | $Types.Skip
    userId?: StringFilter<"UserRoles"> | string | $Types.Skip
    roleId?: StringFilter<"UserRoles"> | string | $Types.Skip
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput> | $Types.Skip
    roles?: XOR<RolesScalarRelationFilter, RolesWhereInput> | $Types.Skip
  }

  export type UserRolesOrderByWithRelationInput = {
    userId?: SortOrder | $Types.Skip
    roleId?: SortOrder | $Types.Skip
    users?: UsersOrderByWithRelationInput | $Types.Skip
    roles?: RolesOrderByWithRelationInput | $Types.Skip
  }

  export type UserRolesWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRolesUserIdRoleIdCompoundUniqueInput | $Types.Skip
    AND?: UserRolesWhereInput | UserRolesWhereInput[] | $Types.Skip
    OR?: UserRolesWhereInput[] | $Types.Skip
    NOT?: UserRolesWhereInput | UserRolesWhereInput[] | $Types.Skip
    userId?: StringFilter<"UserRoles"> | string | $Types.Skip
    roleId?: StringFilter<"UserRoles"> | string | $Types.Skip
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput> | $Types.Skip
    roles?: XOR<RolesScalarRelationFilter, RolesWhereInput> | $Types.Skip
  }, "userId_roleId">

  export type UserRolesOrderByWithAggregationInput = {
    userId?: SortOrder | $Types.Skip
    roleId?: SortOrder | $Types.Skip
    _count?: UserRolesCountOrderByAggregateInput | $Types.Skip
    _max?: UserRolesMaxOrderByAggregateInput | $Types.Skip
    _min?: UserRolesMinOrderByAggregateInput | $Types.Skip
  }

  export type UserRolesScalarWhereWithAggregatesInput = {
    AND?: UserRolesScalarWhereWithAggregatesInput | UserRolesScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserRolesScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserRolesScalarWhereWithAggregatesInput | UserRolesScalarWhereWithAggregatesInput[] | $Types.Skip
    userId?: StringWithAggregatesFilter<"UserRoles"> | string | $Types.Skip
    roleId?: StringWithAggregatesFilter<"UserRoles"> | string | $Types.Skip
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[] | $Types.Skip
    OR?: OrdersWhereInput[] | $Types.Skip
    NOT?: OrdersWhereInput | OrdersWhereInput[] | $Types.Skip
    id?: StringFilter<"Orders"> | string | $Types.Skip
    created_at?: DateTimeFilter<"Orders"> | Date | string | $Types.Skip
    user_id?: StringFilter<"Orders"> | string | $Types.Skip
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput> | $Types.Skip
    orderDetails?: OrderDetailsListRelationFilter | $Types.Skip
    payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null | $Types.Skip
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    user?: UsersOrderByWithRelationInput | $Types.Skip
    orderDetails?: OrderDetailsOrderByRelationAggregateInput | $Types.Skip
    payment?: PaymentsOrderByWithRelationInput | $Types.Skip
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: OrdersWhereInput | OrdersWhereInput[] | $Types.Skip
    OR?: OrdersWhereInput[] | $Types.Skip
    NOT?: OrdersWhereInput | OrdersWhereInput[] | $Types.Skip
    created_at?: DateTimeFilter<"Orders"> | Date | string | $Types.Skip
    user_id?: StringFilter<"Orders"> | string | $Types.Skip
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput> | $Types.Skip
    orderDetails?: OrderDetailsListRelationFilter | $Types.Skip
    payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null | $Types.Skip
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    _count?: OrdersCountOrderByAggregateInput | $Types.Skip
    _max?: OrdersMaxOrderByAggregateInput | $Types.Skip
    _min?: OrdersMinOrderByAggregateInput | $Types.Skip
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: OrdersScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Orders"> | string | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string | $Types.Skip
    user_id?: StringWithAggregatesFilter<"Orders"> | string | $Types.Skip
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[] | $Types.Skip
    OR?: PaymentsWhereInput[] | $Types.Skip
    NOT?: PaymentsWhereInput | PaymentsWhereInput[] | $Types.Skip
    id?: StringFilter<"Payments"> | string | $Types.Skip
    created_at?: DateTimeFilter<"Payments"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Payments"> | Date | string | $Types.Skip
    status?: StringFilter<"Payments"> | string | $Types.Skip
    amount?: FloatFilter<"Payments"> | number | $Types.Skip
    currency?: StringFilter<"Payments"> | string | $Types.Skip
    receipt_url?: StringFilter<"Payments"> | string | $Types.Skip
    payment_intent?: StringFilter<"Payments"> | string | $Types.Skip
    orderId?: StringFilter<"Payments"> | string | $Types.Skip
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput> | $Types.Skip
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    amount?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    receipt_url?: SortOrder | $Types.Skip
    payment_intent?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    order?: OrdersOrderByWithRelationInput | $Types.Skip
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    payment_intent?: string | $Types.Skip
    orderId?: string | $Types.Skip
    AND?: PaymentsWhereInput | PaymentsWhereInput[] | $Types.Skip
    OR?: PaymentsWhereInput[] | $Types.Skip
    NOT?: PaymentsWhereInput | PaymentsWhereInput[] | $Types.Skip
    created_at?: DateTimeFilter<"Payments"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Payments"> | Date | string | $Types.Skip
    status?: StringFilter<"Payments"> | string | $Types.Skip
    amount?: FloatFilter<"Payments"> | number | $Types.Skip
    currency?: StringFilter<"Payments"> | string | $Types.Skip
    receipt_url?: StringFilter<"Payments"> | string | $Types.Skip
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput> | $Types.Skip
  }, "id" | "payment_intent" | "orderId">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    amount?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    receipt_url?: SortOrder | $Types.Skip
    payment_intent?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    _count?: PaymentsCountOrderByAggregateInput | $Types.Skip
    _avg?: PaymentsAvgOrderByAggregateInput | $Types.Skip
    _max?: PaymentsMaxOrderByAggregateInput | $Types.Skip
    _min?: PaymentsMinOrderByAggregateInput | $Types.Skip
    _sum?: PaymentsSumOrderByAggregateInput | $Types.Skip
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PaymentsScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Payments"> | string | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string | $Types.Skip
    status?: StringWithAggregatesFilter<"Payments"> | string | $Types.Skip
    amount?: FloatWithAggregatesFilter<"Payments"> | number | $Types.Skip
    currency?: StringWithAggregatesFilter<"Payments"> | string | $Types.Skip
    receipt_url?: StringWithAggregatesFilter<"Payments"> | string | $Types.Skip
    payment_intent?: StringWithAggregatesFilter<"Payments"> | string | $Types.Skip
    orderId?: StringWithAggregatesFilter<"Payments"> | string | $Types.Skip
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[] | $Types.Skip
    OR?: OrderDetailsWhereInput[] | $Types.Skip
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[] | $Types.Skip
    id?: StringFilter<"OrderDetails"> | string | $Types.Skip
    quantity?: IntFilter<"OrderDetails"> | number | $Types.Skip
    price?: FloatFilter<"OrderDetails"> | number | $Types.Skip
    orderDetails_id?: StringFilter<"OrderDetails"> | string | $Types.Skip
    variant_id?: StringFilter<"OrderDetails"> | string | $Types.Skip
    orderDetails?: XOR<OrdersScalarRelationFilter, OrdersWhereInput> | $Types.Skip
    variants?: XOR<VariantsScalarRelationFilter, VariantsWhereInput> | $Types.Skip
  }

  export type OrderDetailsOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    orderDetails_id?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
    orderDetails?: OrdersOrderByWithRelationInput | $Types.Skip
    variants?: VariantsOrderByWithRelationInput | $Types.Skip
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[] | $Types.Skip
    OR?: OrderDetailsWhereInput[] | $Types.Skip
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[] | $Types.Skip
    quantity?: IntFilter<"OrderDetails"> | number | $Types.Skip
    price?: FloatFilter<"OrderDetails"> | number | $Types.Skip
    orderDetails_id?: StringFilter<"OrderDetails"> | string | $Types.Skip
    variant_id?: StringFilter<"OrderDetails"> | string | $Types.Skip
    orderDetails?: XOR<OrdersScalarRelationFilter, OrdersWhereInput> | $Types.Skip
    variants?: XOR<VariantsScalarRelationFilter, VariantsWhereInput> | $Types.Skip
  }, "id">

  export type OrderDetailsOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    orderDetails_id?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
    _count?: OrderDetailsCountOrderByAggregateInput | $Types.Skip
    _avg?: OrderDetailsAvgOrderByAggregateInput | $Types.Skip
    _max?: OrderDetailsMaxOrderByAggregateInput | $Types.Skip
    _min?: OrderDetailsMinOrderByAggregateInput | $Types.Skip
    _sum?: OrderDetailsSumOrderByAggregateInput | $Types.Skip
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: OrderDetailsScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"OrderDetails"> | string | $Types.Skip
    quantity?: IntWithAggregatesFilter<"OrderDetails"> | number | $Types.Skip
    price?: FloatWithAggregatesFilter<"OrderDetails"> | number | $Types.Skip
    orderDetails_id?: StringWithAggregatesFilter<"OrderDetails"> | string | $Types.Skip
    variant_id?: StringWithAggregatesFilter<"OrderDetails"> | string | $Types.Skip
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[] | $Types.Skip
    OR?: ProductsWhereInput[] | $Types.Skip
    NOT?: ProductsWhereInput | ProductsWhereInput[] | $Types.Skip
    id?: StringFilter<"Products"> | string | $Types.Skip
    name?: StringFilter<"Products"> | string | $Types.Skip
    price?: FloatFilter<"Products"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Products"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Products"> | Date | string | $Types.Skip
    active?: BoolFilter<"Products"> | boolean | $Types.Skip
    brand_id?: StringFilter<"Products"> | string | $Types.Skip
    brand?: XOR<BrandsScalarRelationFilter, BrandsWhereInput> | $Types.Skip
    variants?: VariantsListRelationFilter | $Types.Skip
    productCategories?: ProductCategoriesListRelationFilter | $Types.Skip
    likes?: LikesListRelationFilter | $Types.Skip
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    brand_id?: SortOrder | $Types.Skip
    brand?: BrandsOrderByWithRelationInput | $Types.Skip
    variants?: VariantsOrderByRelationAggregateInput | $Types.Skip
    productCategories?: ProductCategoriesOrderByRelationAggregateInput | $Types.Skip
    likes?: LikesOrderByRelationAggregateInput | $Types.Skip
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: ProductsWhereInput | ProductsWhereInput[] | $Types.Skip
    OR?: ProductsWhereInput[] | $Types.Skip
    NOT?: ProductsWhereInput | ProductsWhereInput[] | $Types.Skip
    name?: StringFilter<"Products"> | string | $Types.Skip
    price?: FloatFilter<"Products"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Products"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Products"> | Date | string | $Types.Skip
    active?: BoolFilter<"Products"> | boolean | $Types.Skip
    brand_id?: StringFilter<"Products"> | string | $Types.Skip
    brand?: XOR<BrandsScalarRelationFilter, BrandsWhereInput> | $Types.Skip
    variants?: VariantsListRelationFilter | $Types.Skip
    productCategories?: ProductCategoriesListRelationFilter | $Types.Skip
    likes?: LikesListRelationFilter | $Types.Skip
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    brand_id?: SortOrder | $Types.Skip
    _count?: ProductsCountOrderByAggregateInput | $Types.Skip
    _avg?: ProductsAvgOrderByAggregateInput | $Types.Skip
    _max?: ProductsMaxOrderByAggregateInput | $Types.Skip
    _min?: ProductsMinOrderByAggregateInput | $Types.Skip
    _sum?: ProductsSumOrderByAggregateInput | $Types.Skip
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ProductsScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Products"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"Products"> | string | $Types.Skip
    price?: FloatWithAggregatesFilter<"Products"> | number | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string | $Types.Skip
    active?: BoolWithAggregatesFilter<"Products"> | boolean | $Types.Skip
    brand_id?: StringWithAggregatesFilter<"Products"> | string | $Types.Skip
  }

  export type BrandsWhereInput = {
    AND?: BrandsWhereInput | BrandsWhereInput[] | $Types.Skip
    OR?: BrandsWhereInput[] | $Types.Skip
    NOT?: BrandsWhereInput | BrandsWhereInput[] | $Types.Skip
    id?: StringFilter<"Brands"> | string | $Types.Skip
    name?: StringFilter<"Brands"> | string | $Types.Skip
    products?: ProductsListRelationFilter | $Types.Skip
  }

  export type BrandsOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    products?: ProductsOrderByRelationAggregateInput | $Types.Skip
  }

  export type BrandsWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: BrandsWhereInput | BrandsWhereInput[] | $Types.Skip
    OR?: BrandsWhereInput[] | $Types.Skip
    NOT?: BrandsWhereInput | BrandsWhereInput[] | $Types.Skip
    name?: StringFilter<"Brands"> | string | $Types.Skip
    products?: ProductsListRelationFilter | $Types.Skip
  }, "id">

  export type BrandsOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    _count?: BrandsCountOrderByAggregateInput | $Types.Skip
    _max?: BrandsMaxOrderByAggregateInput | $Types.Skip
    _min?: BrandsMinOrderByAggregateInput | $Types.Skip
  }

  export type BrandsScalarWhereWithAggregatesInput = {
    AND?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: BrandsScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Brands"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"Brands"> | string | $Types.Skip
  }

  export type VariantsWhereInput = {
    AND?: VariantsWhereInput | VariantsWhereInput[] | $Types.Skip
    OR?: VariantsWhereInput[] | $Types.Skip
    NOT?: VariantsWhereInput | VariantsWhereInput[] | $Types.Skip
    id?: StringFilter<"Variants"> | string | $Types.Skip
    product_id?: StringFilter<"Variants"> | string | $Types.Skip
    file_id?: StringFilter<"Variants"> | string | $Types.Skip
    size?: EnumSizeFilter<"Variants"> | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFilter<"Variants"> | $Enums.TextColor | $Types.Skip
    rgb?: StringFilter<"Variants"> | string | $Types.Skip
    stock?: IntFilter<"Variants"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Variants"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Variants"> | Date | string | $Types.Skip
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput> | $Types.Skip
    file?: XOR<FilesNullableScalarRelationFilter, FilesWhereInput> | null | $Types.Skip
    orderDetails?: OrderDetailsListRelationFilter | $Types.Skip
    cartDetails?: CartDetailsListRelationFilter | $Types.Skip
  }

  export type VariantsOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    product_id?: SortOrder | $Types.Skip
    file_id?: SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    textColor?: SortOrder | $Types.Skip
    rgb?: SortOrder | $Types.Skip
    stock?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    product?: ProductsOrderByWithRelationInput | $Types.Skip
    file?: FilesOrderByWithRelationInput | $Types.Skip
    orderDetails?: OrderDetailsOrderByRelationAggregateInput | $Types.Skip
    cartDetails?: CartDetailsOrderByRelationAggregateInput | $Types.Skip
  }

  export type VariantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: VariantsWhereInput | VariantsWhereInput[] | $Types.Skip
    OR?: VariantsWhereInput[] | $Types.Skip
    NOT?: VariantsWhereInput | VariantsWhereInput[] | $Types.Skip
    product_id?: StringFilter<"Variants"> | string | $Types.Skip
    file_id?: StringFilter<"Variants"> | string | $Types.Skip
    size?: EnumSizeFilter<"Variants"> | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFilter<"Variants"> | $Enums.TextColor | $Types.Skip
    rgb?: StringFilter<"Variants"> | string | $Types.Skip
    stock?: IntFilter<"Variants"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Variants"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Variants"> | Date | string | $Types.Skip
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput> | $Types.Skip
    file?: XOR<FilesNullableScalarRelationFilter, FilesWhereInput> | null | $Types.Skip
    orderDetails?: OrderDetailsListRelationFilter | $Types.Skip
    cartDetails?: CartDetailsListRelationFilter | $Types.Skip
  }, "id">

  export type VariantsOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    product_id?: SortOrder | $Types.Skip
    file_id?: SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    textColor?: SortOrder | $Types.Skip
    rgb?: SortOrder | $Types.Skip
    stock?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: VariantsCountOrderByAggregateInput | $Types.Skip
    _avg?: VariantsAvgOrderByAggregateInput | $Types.Skip
    _max?: VariantsMaxOrderByAggregateInput | $Types.Skip
    _min?: VariantsMinOrderByAggregateInput | $Types.Skip
    _sum?: VariantsSumOrderByAggregateInput | $Types.Skip
  }

  export type VariantsScalarWhereWithAggregatesInput = {
    AND?: VariantsScalarWhereWithAggregatesInput | VariantsScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: VariantsScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: VariantsScalarWhereWithAggregatesInput | VariantsScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Variants"> | string | $Types.Skip
    product_id?: StringWithAggregatesFilter<"Variants"> | string | $Types.Skip
    file_id?: StringWithAggregatesFilter<"Variants"> | string | $Types.Skip
    size?: EnumSizeWithAggregatesFilter<"Variants"> | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorWithAggregatesFilter<"Variants"> | $Enums.TextColor | $Types.Skip
    rgb?: StringWithAggregatesFilter<"Variants"> | string | $Types.Skip
    stock?: IntWithAggregatesFilter<"Variants"> | number | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Variants"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Variants"> | Date | string | $Types.Skip
  }

  export type FilesWhereInput = {
    AND?: FilesWhereInput | FilesWhereInput[] | $Types.Skip
    OR?: FilesWhereInput[] | $Types.Skip
    NOT?: FilesWhereInput | FilesWhereInput[] | $Types.Skip
    id?: StringFilter<"Files"> | string | $Types.Skip
    key?: StringFilter<"Files"> | string | $Types.Skip
    file_url?: StringNullableFilter<"Files"> | string | null | $Types.Skip
    variants?: VariantsListRelationFilter | $Types.Skip
  }

  export type FilesOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    key?: SortOrder | $Types.Skip
    file_url?: SortOrderInput | SortOrder | $Types.Skip
    variants?: VariantsOrderByRelationAggregateInput | $Types.Skip
  }

  export type FilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: FilesWhereInput | FilesWhereInput[] | $Types.Skip
    OR?: FilesWhereInput[] | $Types.Skip
    NOT?: FilesWhereInput | FilesWhereInput[] | $Types.Skip
    key?: StringFilter<"Files"> | string | $Types.Skip
    file_url?: StringNullableFilter<"Files"> | string | null | $Types.Skip
    variants?: VariantsListRelationFilter | $Types.Skip
  }, "id">

  export type FilesOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    key?: SortOrder | $Types.Skip
    file_url?: SortOrderInput | SortOrder | $Types.Skip
    _count?: FilesCountOrderByAggregateInput | $Types.Skip
    _max?: FilesMaxOrderByAggregateInput | $Types.Skip
    _min?: FilesMinOrderByAggregateInput | $Types.Skip
  }

  export type FilesScalarWhereWithAggregatesInput = {
    AND?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: FilesScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Files"> | string | $Types.Skip
    key?: StringWithAggregatesFilter<"Files"> | string | $Types.Skip
    file_url?: StringNullableWithAggregatesFilter<"Files"> | string | null | $Types.Skip
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[] | $Types.Skip
    OR?: CategoriesWhereInput[] | $Types.Skip
    NOT?: CategoriesWhereInput | CategoriesWhereInput[] | $Types.Skip
    id?: StringFilter<"Categories"> | string | $Types.Skip
    name?: StringFilter<"Categories"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Categories"> | string | null | $Types.Skip
    active?: BoolFilter<"Categories"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Categories"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Categories"> | Date | string | $Types.Skip
    parent?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null | $Types.Skip
    productCategories?: ProductCategoriesListRelationFilter | $Types.Skip
    Categories?: CategoriesListRelationFilter | $Types.Skip
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    parentId?: SortOrderInput | SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    parent?: CategoriesOrderByWithRelationInput | $Types.Skip
    productCategories?: ProductCategoriesOrderByRelationAggregateInput | $Types.Skip
    Categories?: CategoriesOrderByRelationAggregateInput | $Types.Skip
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: CategoriesWhereInput | CategoriesWhereInput[] | $Types.Skip
    OR?: CategoriesWhereInput[] | $Types.Skip
    NOT?: CategoriesWhereInput | CategoriesWhereInput[] | $Types.Skip
    name?: StringFilter<"Categories"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Categories"> | string | null | $Types.Skip
    active?: BoolFilter<"Categories"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Categories"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Categories"> | Date | string | $Types.Skip
    parent?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null | $Types.Skip
    productCategories?: ProductCategoriesListRelationFilter | $Types.Skip
    Categories?: CategoriesListRelationFilter | $Types.Skip
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    parentId?: SortOrderInput | SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: CategoriesCountOrderByAggregateInput | $Types.Skip
    _max?: CategoriesMaxOrderByAggregateInput | $Types.Skip
    _min?: CategoriesMinOrderByAggregateInput | $Types.Skip
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CategoriesScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Categories"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"Categories"> | string | $Types.Skip
    parentId?: StringNullableWithAggregatesFilter<"Categories"> | string | null | $Types.Skip
    active?: BoolWithAggregatesFilter<"Categories"> | boolean | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string | $Types.Skip
  }

  export type ProductCategoriesWhereInput = {
    AND?: ProductCategoriesWhereInput | ProductCategoriesWhereInput[] | $Types.Skip
    OR?: ProductCategoriesWhereInput[] | $Types.Skip
    NOT?: ProductCategoriesWhereInput | ProductCategoriesWhereInput[] | $Types.Skip
    productId?: StringFilter<"ProductCategories"> | string | $Types.Skip
    categoryId?: StringFilter<"ProductCategories"> | string | $Types.Skip
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput> | $Types.Skip
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput> | $Types.Skip
  }

  export type ProductCategoriesOrderByWithRelationInput = {
    productId?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
    products?: ProductsOrderByWithRelationInput | $Types.Skip
    categories?: CategoriesOrderByWithRelationInput | $Types.Skip
  }

  export type ProductCategoriesWhereUniqueInput = Prisma.AtLeast<{
    productId_categoryId?: ProductCategoriesProductIdCategoryIdCompoundUniqueInput | $Types.Skip
    AND?: ProductCategoriesWhereInput | ProductCategoriesWhereInput[] | $Types.Skip
    OR?: ProductCategoriesWhereInput[] | $Types.Skip
    NOT?: ProductCategoriesWhereInput | ProductCategoriesWhereInput[] | $Types.Skip
    productId?: StringFilter<"ProductCategories"> | string | $Types.Skip
    categoryId?: StringFilter<"ProductCategories"> | string | $Types.Skip
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput> | $Types.Skip
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput> | $Types.Skip
  }, "productId_categoryId">

  export type ProductCategoriesOrderByWithAggregationInput = {
    productId?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
    _count?: ProductCategoriesCountOrderByAggregateInput | $Types.Skip
    _max?: ProductCategoriesMaxOrderByAggregateInput | $Types.Skip
    _min?: ProductCategoriesMinOrderByAggregateInput | $Types.Skip
  }

  export type ProductCategoriesScalarWhereWithAggregatesInput = {
    AND?: ProductCategoriesScalarWhereWithAggregatesInput | ProductCategoriesScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ProductCategoriesScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ProductCategoriesScalarWhereWithAggregatesInput | ProductCategoriesScalarWhereWithAggregatesInput[] | $Types.Skip
    productId?: StringWithAggregatesFilter<"ProductCategories"> | string | $Types.Skip
    categoryId?: StringWithAggregatesFilter<"ProductCategories"> | string | $Types.Skip
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[] | $Types.Skip
    OR?: LikesWhereInput[] | $Types.Skip
    NOT?: LikesWhereInput | LikesWhereInput[] | $Types.Skip
    productId?: StringFilter<"Likes"> | string | $Types.Skip
    user_id?: StringFilter<"Likes"> | string | $Types.Skip
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput> | $Types.Skip
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput> | $Types.Skip
  }

  export type LikesOrderByWithRelationInput = {
    productId?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    products?: ProductsOrderByWithRelationInput | $Types.Skip
    user?: UsersOrderByWithRelationInput | $Types.Skip
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    user_id_productId?: LikesUser_idProductIdCompoundUniqueInput | $Types.Skip
    AND?: LikesWhereInput | LikesWhereInput[] | $Types.Skip
    OR?: LikesWhereInput[] | $Types.Skip
    NOT?: LikesWhereInput | LikesWhereInput[] | $Types.Skip
    productId?: StringFilter<"Likes"> | string | $Types.Skip
    user_id?: StringFilter<"Likes"> | string | $Types.Skip
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput> | $Types.Skip
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput> | $Types.Skip
  }, "user_id_productId">

  export type LikesOrderByWithAggregationInput = {
    productId?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    _count?: LikesCountOrderByAggregateInput | $Types.Skip
    _max?: LikesMaxOrderByAggregateInput | $Types.Skip
    _min?: LikesMinOrderByAggregateInput | $Types.Skip
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: LikesScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[] | $Types.Skip
    productId?: StringWithAggregatesFilter<"Likes"> | string | $Types.Skip
    user_id?: StringWithAggregatesFilter<"Likes"> | string | $Types.Skip
  }

  export type CartDetailsWhereInput = {
    AND?: CartDetailsWhereInput | CartDetailsWhereInput[] | $Types.Skip
    OR?: CartDetailsWhereInput[] | $Types.Skip
    NOT?: CartDetailsWhereInput | CartDetailsWhereInput[] | $Types.Skip
    id?: StringFilter<"CartDetails"> | string | $Types.Skip
    quantity?: IntFilter<"CartDetails"> | number | $Types.Skip
    price?: FloatFilter<"CartDetails"> | number | $Types.Skip
    variant_id?: StringFilter<"CartDetails"> | string | $Types.Skip
    cart_id?: StringFilter<"CartDetails"> | string | $Types.Skip
    variants?: XOR<VariantsScalarRelationFilter, VariantsWhereInput> | $Types.Skip
    cart?: XOR<CartsScalarRelationFilter, CartsWhereInput> | $Types.Skip
  }

  export type CartDetailsOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
    cart_id?: SortOrder | $Types.Skip
    variants?: VariantsOrderByWithRelationInput | $Types.Skip
    cart?: CartsOrderByWithRelationInput | $Types.Skip
  }

  export type CartDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: CartDetailsWhereInput | CartDetailsWhereInput[] | $Types.Skip
    OR?: CartDetailsWhereInput[] | $Types.Skip
    NOT?: CartDetailsWhereInput | CartDetailsWhereInput[] | $Types.Skip
    quantity?: IntFilter<"CartDetails"> | number | $Types.Skip
    price?: FloatFilter<"CartDetails"> | number | $Types.Skip
    variant_id?: StringFilter<"CartDetails"> | string | $Types.Skip
    cart_id?: StringFilter<"CartDetails"> | string | $Types.Skip
    variants?: XOR<VariantsScalarRelationFilter, VariantsWhereInput> | $Types.Skip
    cart?: XOR<CartsScalarRelationFilter, CartsWhereInput> | $Types.Skip
  }, "id">

  export type CartDetailsOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
    cart_id?: SortOrder | $Types.Skip
    _count?: CartDetailsCountOrderByAggregateInput | $Types.Skip
    _avg?: CartDetailsAvgOrderByAggregateInput | $Types.Skip
    _max?: CartDetailsMaxOrderByAggregateInput | $Types.Skip
    _min?: CartDetailsMinOrderByAggregateInput | $Types.Skip
    _sum?: CartDetailsSumOrderByAggregateInput | $Types.Skip
  }

  export type CartDetailsScalarWhereWithAggregatesInput = {
    AND?: CartDetailsScalarWhereWithAggregatesInput | CartDetailsScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CartDetailsScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CartDetailsScalarWhereWithAggregatesInput | CartDetailsScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"CartDetails"> | string | $Types.Skip
    quantity?: IntWithAggregatesFilter<"CartDetails"> | number | $Types.Skip
    price?: FloatWithAggregatesFilter<"CartDetails"> | number | $Types.Skip
    variant_id?: StringWithAggregatesFilter<"CartDetails"> | string | $Types.Skip
    cart_id?: StringWithAggregatesFilter<"CartDetails"> | string | $Types.Skip
  }

  export type CartsWhereInput = {
    AND?: CartsWhereInput | CartsWhereInput[] | $Types.Skip
    OR?: CartsWhereInput[] | $Types.Skip
    NOT?: CartsWhereInput | CartsWhereInput[] | $Types.Skip
    id?: StringFilter<"Carts"> | string | $Types.Skip
    user_id?: StringFilter<"Carts"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Carts"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Carts"> | Date | string | $Types.Skip
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput> | $Types.Skip
    cartDetails?: CartDetailsListRelationFilter | $Types.Skip
  }

  export type CartsOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    user?: UsersOrderByWithRelationInput | $Types.Skip
    cartDetails?: CartDetailsOrderByRelationAggregateInput | $Types.Skip
  }

  export type CartsWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: CartsWhereInput | CartsWhereInput[] | $Types.Skip
    OR?: CartsWhereInput[] | $Types.Skip
    NOT?: CartsWhereInput | CartsWhereInput[] | $Types.Skip
    user_id?: StringFilter<"Carts"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Carts"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Carts"> | Date | string | $Types.Skip
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput> | $Types.Skip
    cartDetails?: CartDetailsListRelationFilter | $Types.Skip
  }, "id">

  export type CartsOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: CartsCountOrderByAggregateInput | $Types.Skip
    _max?: CartsMaxOrderByAggregateInput | $Types.Skip
    _min?: CartsMinOrderByAggregateInput | $Types.Skip
  }

  export type CartsScalarWhereWithAggregatesInput = {
    AND?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CartsScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Carts"> | string | $Types.Skip
    user_id?: StringWithAggregatesFilter<"Carts"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Carts"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Carts"> | Date | string | $Types.Skip
  }

  export type RolesCreateInput = {
    id?: string | $Types.Skip
    name: string
    users?: UserRolesCreateNestedManyWithoutRolesInput | $Types.Skip
  }

  export type RolesUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    users?: UserRolesUncheckedCreateNestedManyWithoutRolesInput | $Types.Skip
  }

  export type RolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    users?: UserRolesUpdateManyWithoutRolesNestedInput | $Types.Skip
  }

  export type RolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    users?: UserRolesUncheckedUpdateManyWithoutRolesNestedInput | $Types.Skip
  }

  export type RolesCreateManyInput = {
    id?: string | $Types.Skip
    name: string
  }

  export type RolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UsersCreateInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    roles?: UserRolesCreateNestedManyWithoutUsersInput | $Types.Skip
    orders?: OrdersCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikesCreateNestedManyWithoutUserInput | $Types.Skip
    carts?: CartsCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersUncheckedCreateInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    roles?: UserRolesUncheckedCreateNestedManyWithoutUsersInput | $Types.Skip
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    carts?: CartsUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roles?: UserRolesUpdateManyWithoutUsersNestedInput | $Types.Skip
    orders?: OrdersUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikesUpdateManyWithoutUserNestedInput | $Types.Skip
    carts?: CartsUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roles?: UserRolesUncheckedUpdateManyWithoutUsersNestedInput | $Types.Skip
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    carts?: CartsUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UsersCreateManyInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserRolesCreateInput = {
    users: UsersCreateNestedOneWithoutRolesInput
    roles: RolesCreateNestedOneWithoutUsersInput
  }

  export type UserRolesUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type UserRolesUpdateInput = {
    users?: UsersUpdateOneRequiredWithoutRolesNestedInput | $Types.Skip
    roles?: RolesUpdateOneRequiredWithoutUsersNestedInput | $Types.Skip
  }

  export type UserRolesUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roleId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserRolesCreateManyInput = {
    userId: string
    roleId: string
  }

  export type UserRolesUpdateManyMutationInput = {

  }

  export type UserRolesUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roleId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrdersCreateInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    user: UsersCreateNestedOneWithoutOrdersInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderDetailsInput | $Types.Skip
    payment?: PaymentsCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrdersUncheckedCreateInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    user_id: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderDetailsInput | $Types.Skip
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
    orderDetails?: OrderDetailsUpdateManyWithoutOrderDetailsNestedInput | $Types.Skip
    payment?: PaymentsUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderDetailsNestedInput | $Types.Skip
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrdersCreateManyInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    user_id: string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type PaymentsCreateInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    status: string
    amount: number
    currency: string
    receipt_url: string
    payment_intent: string
    order: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    status: string
    amount: number
    currency: string
    receipt_url: string
    payment_intent: string
    orderId: string
  }

  export type PaymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    amount?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    currency?: StringFieldUpdateOperationsInput | string | $Types.Skip
    receipt_url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment_intent?: StringFieldUpdateOperationsInput | string | $Types.Skip
    order?: OrdersUpdateOneRequiredWithoutPaymentNestedInput | $Types.Skip
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    amount?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    currency?: StringFieldUpdateOperationsInput | string | $Types.Skip
    receipt_url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment_intent?: StringFieldUpdateOperationsInput | string | $Types.Skip
    orderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type PaymentsCreateManyInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    status: string
    amount: number
    currency: string
    receipt_url: string
    payment_intent: string
    orderId: string
  }

  export type PaymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    amount?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    currency?: StringFieldUpdateOperationsInput | string | $Types.Skip
    receipt_url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment_intent?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    amount?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    currency?: StringFieldUpdateOperationsInput | string | $Types.Skip
    receipt_url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment_intent?: StringFieldUpdateOperationsInput | string | $Types.Skip
    orderId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrderDetailsCreateInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    orderDetails: OrdersCreateNestedOneWithoutOrderDetailsInput
    variants: VariantsCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    orderDetails_id: string
    variant_id: string
  }

  export type OrderDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    orderDetails?: OrdersUpdateOneRequiredWithoutOrderDetailsNestedInput | $Types.Skip
    variants?: VariantsUpdateOneRequiredWithoutOrderDetailsNestedInput | $Types.Skip
  }

  export type OrderDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    orderDetails_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    variant_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrderDetailsCreateManyInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    orderDetails_id: string
    variant_id: string
  }

  export type OrderDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    orderDetails_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    variant_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type ProductsCreateInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand: BrandsCreateNestedOneWithoutProductsInput
    variants?: VariantsCreateNestedManyWithoutProductInput | $Types.Skip
    productCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput | $Types.Skip
    likes?: LikesCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id: string
    variants?: VariantsUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    productCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput | $Types.Skip
    likes?: LikesUncheckedCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput | $Types.Skip
    variants?: VariantsUpdateManyWithoutProductNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput | $Types.Skip
    likes?: LikesUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    variants?: VariantsUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput | $Types.Skip
    likes?: LikesUncheckedUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type ProductsCreateManyInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id: string
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type BrandsCreateInput = {
    id?: string | $Types.Skip
    name: string
    products?: ProductsCreateNestedManyWithoutBrandInput | $Types.Skip
  }

  export type BrandsUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    products?: ProductsUncheckedCreateNestedManyWithoutBrandInput | $Types.Skip
  }

  export type BrandsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    products?: ProductsUpdateManyWithoutBrandNestedInput | $Types.Skip
  }

  export type BrandsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    products?: ProductsUncheckedUpdateManyWithoutBrandNestedInput | $Types.Skip
  }

  export type BrandsCreateManyInput = {
    id?: string | $Types.Skip
    name: string
  }

  export type BrandsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type BrandsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type VariantsCreateInput = {
    id?: string | $Types.Skip
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    product: ProductsCreateNestedOneWithoutVariantsInput
    file?: FilesCreateNestedOneWithoutVariantsInput | $Types.Skip
    orderDetails?: OrderDetailsCreateNestedManyWithoutVariantsInput | $Types.Skip
    cartDetails?: CartDetailsCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsUncheckedCreateInput = {
    id?: string | $Types.Skip
    product_id: string
    file_id: string
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutVariantsInput | $Types.Skip
    cartDetails?: CartDetailsUncheckedCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    product?: ProductsUpdateOneRequiredWithoutVariantsNestedInput | $Types.Skip
    file?: FilesUpdateOneWithoutVariantsNestedInput | $Types.Skip
    orderDetails?: OrderDetailsUpdateManyWithoutVariantsNestedInput | $Types.Skip
    cartDetails?: CartDetailsUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type VariantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    product_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutVariantsNestedInput | $Types.Skip
    cartDetails?: CartDetailsUncheckedUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type VariantsCreateManyInput = {
    id?: string | $Types.Skip
    product_id: string
    file_id: string
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type VariantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type VariantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    product_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FilesCreateInput = {
    id?: string | $Types.Skip
    key?: string | $Types.Skip
    file_url?: string | null | $Types.Skip
    variants?: VariantsCreateNestedManyWithoutFileInput | $Types.Skip
  }

  export type FilesUncheckedCreateInput = {
    id?: string | $Types.Skip
    key?: string | $Types.Skip
    file_url?: string | null | $Types.Skip
    variants?: VariantsUncheckedCreateNestedManyWithoutFileInput | $Types.Skip
  }

  export type FilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    key?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    variants?: VariantsUpdateManyWithoutFileNestedInput | $Types.Skip
  }

  export type FilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    key?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    variants?: VariantsUncheckedUpdateManyWithoutFileNestedInput | $Types.Skip
  }

  export type FilesCreateManyInput = {
    id?: string | $Types.Skip
    key?: string | $Types.Skip
    file_url?: string | null | $Types.Skip
  }

  export type FilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    key?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type FilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    key?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type CategoriesCreateInput = {
    id?: string | $Types.Skip
    name: string
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    parent?: CategoriesCreateNestedOneWithoutCategoriesInput | $Types.Skip
    productCategories?: ProductCategoriesCreateNestedManyWithoutCategoriesInput | $Types.Skip
    Categories?: CategoriesCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CategoriesUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    parentId?: string | null | $Types.Skip
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    productCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutCategoriesInput | $Types.Skip
    Categories?: CategoriesUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    parent?: CategoriesUpdateOneWithoutCategoriesNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUpdateManyWithoutCategoriesNestedInput | $Types.Skip
    Categories?: CategoriesUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    productCategories?: ProductCategoriesUncheckedUpdateManyWithoutCategoriesNestedInput | $Types.Skip
    Categories?: CategoriesUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CategoriesCreateManyInput = {
    id?: string | $Types.Skip
    name: string
    parentId?: string | null | $Types.Skip
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProductCategoriesCreateInput = {
    products: ProductsCreateNestedOneWithoutProductCategoriesInput
    categories: CategoriesCreateNestedOneWithoutProductCategoriesInput
  }

  export type ProductCategoriesUncheckedCreateInput = {
    productId: string
    categoryId: string
  }

  export type ProductCategoriesUpdateInput = {
    products?: ProductsUpdateOneRequiredWithoutProductCategoriesNestedInput | $Types.Skip
    categories?: CategoriesUpdateOneRequiredWithoutProductCategoriesNestedInput | $Types.Skip
  }

  export type ProductCategoriesUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    categoryId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type ProductCategoriesCreateManyInput = {
    productId: string
    categoryId: string
  }

  export type ProductCategoriesUpdateManyMutationInput = {

  }

  export type ProductCategoriesUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    categoryId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type LikesCreateInput = {
    products: ProductsCreateNestedOneWithoutLikesInput
    user: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    productId: string
    user_id: string
  }

  export type LikesUpdateInput = {
    products?: ProductsUpdateOneRequiredWithoutLikesNestedInput | $Types.Skip
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput | $Types.Skip
  }

  export type LikesUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type LikesCreateManyInput = {
    productId: string
    user_id: string
  }

  export type LikesUpdateManyMutationInput = {

  }

  export type LikesUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CartDetailsCreateInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variants: VariantsCreateNestedOneWithoutCartDetailsInput
    cart: CartsCreateNestedOneWithoutCartDetailsInput
  }

  export type CartDetailsUncheckedCreateInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variant_id: string
    cart_id: string
  }

  export type CartDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variants?: VariantsUpdateOneRequiredWithoutCartDetailsNestedInput | $Types.Skip
    cart?: CartsUpdateOneRequiredWithoutCartDetailsNestedInput | $Types.Skip
  }

  export type CartDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variant_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    cart_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CartDetailsCreateManyInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variant_id: string
    cart_id: string
  }

  export type CartDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CartDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variant_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    cart_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CartsCreateInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UsersCreateNestedOneWithoutCartsInput
    cartDetails?: CartDetailsCreateNestedManyWithoutCartInput | $Types.Skip
  }

  export type CartsUncheckedCreateInput = {
    id?: string | $Types.Skip
    user_id: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    cartDetails?: CartDetailsUncheckedCreateNestedManyWithoutCartInput | $Types.Skip
  }

  export type CartsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UsersUpdateOneRequiredWithoutCartsNestedInput | $Types.Skip
    cartDetails?: CartDetailsUpdateManyWithoutCartNestedInput | $Types.Skip
  }

  export type CartsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    cartDetails?: CartDetailsUncheckedUpdateManyWithoutCartNestedInput | $Types.Skip
  }

  export type CartsCreateManyInput = {
    id?: string | $Types.Skip
    user_id: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CartsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CartsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type UserRolesListRelationFilter = {
    every?: UserRolesWhereInput | $Types.Skip
    some?: UserRolesWhereInput | $Types.Skip
    none?: UserRolesWhereInput | $Types.Skip
  }

  export type UserRolesOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput | $Types.Skip
    some?: OrdersWhereInput | $Types.Skip
    none?: OrdersWhereInput | $Types.Skip
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput | $Types.Skip
    some?: LikesWhereInput | $Types.Skip
    none?: LikesWhereInput | $Types.Skip
  }

  export type CartsListRelationFilter = {
    every?: CartsWhereInput | $Types.Skip
    some?: CartsWhereInput | $Types.Skip
    none?: CartsWhereInput | $Types.Skip
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CartsOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    nickname?: SortOrder | $Types.Skip
    first_name?: SortOrder | $Types.Skip
    last_name?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    nickname?: SortOrder | $Types.Skip
    first_name?: SortOrder | $Types.Skip
    last_name?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    nickname?: SortOrder | $Types.Skip
    first_name?: SortOrder | $Types.Skip
    last_name?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput | $Types.Skip
    isNot?: UsersWhereInput | $Types.Skip
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput | $Types.Skip
    isNot?: RolesWhereInput | $Types.Skip
  }

  export type UserRolesUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRolesCountOrderByAggregateInput = {
    userId?: SortOrder | $Types.Skip
    roleId?: SortOrder | $Types.Skip
  }

  export type UserRolesMaxOrderByAggregateInput = {
    userId?: SortOrder | $Types.Skip
    roleId?: SortOrder | $Types.Skip
  }

  export type UserRolesMinOrderByAggregateInput = {
    userId?: SortOrder | $Types.Skip
    roleId?: SortOrder | $Types.Skip
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type OrderDetailsListRelationFilter = {
    every?: OrderDetailsWhereInput | $Types.Skip
    some?: OrderDetailsWhereInput | $Types.Skip
    none?: OrderDetailsWhereInput | $Types.Skip
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: PaymentsWhereInput | null | $Types.Skip
    isNot?: PaymentsWhereInput | null | $Types.Skip
  }

  export type OrderDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput | $Types.Skip
    isNot?: OrdersWhereInput | $Types.Skip
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    amount?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    receipt_url?: SortOrder | $Types.Skip
    payment_intent?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
  }

  export type PaymentsAvgOrderByAggregateInput = {
    amount?: SortOrder | $Types.Skip
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    amount?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    receipt_url?: SortOrder | $Types.Skip
    payment_intent?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    amount?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    receipt_url?: SortOrder | $Types.Skip
    payment_intent?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
  }

  export type PaymentsSumOrderByAggregateInput = {
    amount?: SortOrder | $Types.Skip
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _min?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _max?: NestedFloatFilter<$PrismaModel> | $Types.Skip
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type VariantsScalarRelationFilter = {
    is?: VariantsWhereInput | $Types.Skip
    isNot?: VariantsWhereInput | $Types.Skip
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    orderDetails_id?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
  }

  export type OrderDetailsAvgOrderByAggregateInput = {
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    orderDetails_id?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    orderDetails_id?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
  }

  export type OrderDetailsSumOrderByAggregateInput = {
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type BrandsScalarRelationFilter = {
    is?: BrandsWhereInput | $Types.Skip
    isNot?: BrandsWhereInput | $Types.Skip
  }

  export type VariantsListRelationFilter = {
    every?: VariantsWhereInput | $Types.Skip
    some?: VariantsWhereInput | $Types.Skip
    none?: VariantsWhereInput | $Types.Skip
  }

  export type ProductCategoriesListRelationFilter = {
    every?: ProductCategoriesWhereInput | $Types.Skip
    some?: ProductCategoriesWhereInput | $Types.Skip
    none?: ProductCategoriesWhereInput | $Types.Skip
  }

  export type VariantsOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ProductCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    brand_id?: SortOrder | $Types.Skip
  }

  export type ProductsAvgOrderByAggregateInput = {
    price?: SortOrder | $Types.Skip
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    brand_id?: SortOrder | $Types.Skip
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    brand_id?: SortOrder | $Types.Skip
  }

  export type ProductsSumOrderByAggregateInput = {
    price?: SortOrder | $Types.Skip
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput | $Types.Skip
    some?: ProductsWhereInput | $Types.Skip
    none?: ProductsWhereInput | $Types.Skip
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type BrandsCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type BrandsMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type BrandsMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
  }

  export type EnumSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumSizeFilter<$PrismaModel> | $Enums.Size | $Types.Skip
  }

  export type EnumTextColorFilter<$PrismaModel = never> = {
    equals?: $Enums.TextColor | EnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.TextColor[] | ListEnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.TextColor[] | ListEnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTextColorFilter<$PrismaModel> | $Enums.TextColor | $Types.Skip
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput | $Types.Skip
    isNot?: ProductsWhereInput | $Types.Skip
  }

  export type FilesNullableScalarRelationFilter = {
    is?: FilesWhereInput | null | $Types.Skip
    isNot?: FilesWhereInput | null | $Types.Skip
  }

  export type CartDetailsListRelationFilter = {
    every?: CartDetailsWhereInput | $Types.Skip
    some?: CartDetailsWhereInput | $Types.Skip
    none?: CartDetailsWhereInput | $Types.Skip
  }

  export type CartDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type VariantsCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    product_id?: SortOrder | $Types.Skip
    file_id?: SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    textColor?: SortOrder | $Types.Skip
    rgb?: SortOrder | $Types.Skip
    stock?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type VariantsAvgOrderByAggregateInput = {
    stock?: SortOrder | $Types.Skip
  }

  export type VariantsMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    product_id?: SortOrder | $Types.Skip
    file_id?: SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    textColor?: SortOrder | $Types.Skip
    rgb?: SortOrder | $Types.Skip
    stock?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type VariantsMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    product_id?: SortOrder | $Types.Skip
    file_id?: SortOrder | $Types.Skip
    size?: SortOrder | $Types.Skip
    textColor?: SortOrder | $Types.Skip
    rgb?: SortOrder | $Types.Skip
    stock?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type VariantsSumOrderByAggregateInput = {
    stock?: SortOrder | $Types.Skip
  }

  export type EnumSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumSizeWithAggregatesFilter<$PrismaModel> | $Enums.Size | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumSizeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumSizeFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumTextColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TextColor | EnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.TextColor[] | ListEnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.TextColor[] | ListEnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTextColorWithAggregatesFilter<$PrismaModel> | $Enums.TextColor | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumTextColorFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumTextColorFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type FilesCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    key?: SortOrder | $Types.Skip
    file_url?: SortOrder | $Types.Skip
  }

  export type FilesMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    key?: SortOrder | $Types.Skip
    file_url?: SortOrder | $Types.Skip
  }

  export type FilesMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    key?: SortOrder | $Types.Skip
    file_url?: SortOrder | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null | $Types.Skip
    isNot?: CategoriesWhereInput | null | $Types.Skip
  }

  export type CategoriesListRelationFilter = {
    every?: CategoriesWhereInput | $Types.Skip
    some?: CategoriesWhereInput | $Types.Skip
    none?: CategoriesWhereInput | $Types.Skip
  }

  export type CategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    active?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput | $Types.Skip
    isNot?: CategoriesWhereInput | $Types.Skip
  }

  export type ProductCategoriesProductIdCategoryIdCompoundUniqueInput = {
    productId: string
    categoryId: string
  }

  export type ProductCategoriesCountOrderByAggregateInput = {
    productId?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
  }

  export type ProductCategoriesMaxOrderByAggregateInput = {
    productId?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
  }

  export type ProductCategoriesMinOrderByAggregateInput = {
    productId?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
  }

  export type LikesUser_idProductIdCompoundUniqueInput = {
    user_id: string
    productId: string
  }

  export type LikesCountOrderByAggregateInput = {
    productId?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
  }

  export type LikesMaxOrderByAggregateInput = {
    productId?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
  }

  export type LikesMinOrderByAggregateInput = {
    productId?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
  }

  export type CartsScalarRelationFilter = {
    is?: CartsWhereInput | $Types.Skip
    isNot?: CartsWhereInput | $Types.Skip
  }

  export type CartDetailsCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
    cart_id?: SortOrder | $Types.Skip
  }

  export type CartDetailsAvgOrderByAggregateInput = {
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type CartDetailsMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
    cart_id?: SortOrder | $Types.Skip
  }

  export type CartDetailsMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    variant_id?: SortOrder | $Types.Skip
    cart_id?: SortOrder | $Types.Skip
  }

  export type CartDetailsSumOrderByAggregateInput = {
    quantity?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type CartsCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CartsMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CartsMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    user_id?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type UserRolesCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserRolesCreateWithoutRolesInput, UserRolesUncheckedCreateWithoutRolesInput> | UserRolesCreateWithoutRolesInput[] | UserRolesUncheckedCreateWithoutRolesInput[] | $Types.Skip
    connectOrCreate?: UserRolesCreateOrConnectWithoutRolesInput | UserRolesCreateOrConnectWithoutRolesInput[] | $Types.Skip
    createMany?: UserRolesCreateManyRolesInputEnvelope | $Types.Skip
    connect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
  }

  export type UserRolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserRolesCreateWithoutRolesInput, UserRolesUncheckedCreateWithoutRolesInput> | UserRolesCreateWithoutRolesInput[] | UserRolesUncheckedCreateWithoutRolesInput[] | $Types.Skip
    connectOrCreate?: UserRolesCreateOrConnectWithoutRolesInput | UserRolesCreateOrConnectWithoutRolesInput[] | $Types.Skip
    createMany?: UserRolesCreateManyRolesInputEnvelope | $Types.Skip
    connect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type UserRolesUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserRolesCreateWithoutRolesInput, UserRolesUncheckedCreateWithoutRolesInput> | UserRolesCreateWithoutRolesInput[] | UserRolesUncheckedCreateWithoutRolesInput[] | $Types.Skip
    connectOrCreate?: UserRolesCreateOrConnectWithoutRolesInput | UserRolesCreateOrConnectWithoutRolesInput[] | $Types.Skip
    upsert?: UserRolesUpsertWithWhereUniqueWithoutRolesInput | UserRolesUpsertWithWhereUniqueWithoutRolesInput[] | $Types.Skip
    createMany?: UserRolesCreateManyRolesInputEnvelope | $Types.Skip
    set?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    disconnect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    delete?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    connect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    update?: UserRolesUpdateWithWhereUniqueWithoutRolesInput | UserRolesUpdateWithWhereUniqueWithoutRolesInput[] | $Types.Skip
    updateMany?: UserRolesUpdateManyWithWhereWithoutRolesInput | UserRolesUpdateManyWithWhereWithoutRolesInput[] | $Types.Skip
    deleteMany?: UserRolesScalarWhereInput | UserRolesScalarWhereInput[] | $Types.Skip
  }

  export type UserRolesUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserRolesCreateWithoutRolesInput, UserRolesUncheckedCreateWithoutRolesInput> | UserRolesCreateWithoutRolesInput[] | UserRolesUncheckedCreateWithoutRolesInput[] | $Types.Skip
    connectOrCreate?: UserRolesCreateOrConnectWithoutRolesInput | UserRolesCreateOrConnectWithoutRolesInput[] | $Types.Skip
    upsert?: UserRolesUpsertWithWhereUniqueWithoutRolesInput | UserRolesUpsertWithWhereUniqueWithoutRolesInput[] | $Types.Skip
    createMany?: UserRolesCreateManyRolesInputEnvelope | $Types.Skip
    set?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    disconnect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    delete?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    connect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    update?: UserRolesUpdateWithWhereUniqueWithoutRolesInput | UserRolesUpdateWithWhereUniqueWithoutRolesInput[] | $Types.Skip
    updateMany?: UserRolesUpdateManyWithWhereWithoutRolesInput | UserRolesUpdateManyWithWhereWithoutRolesInput[] | $Types.Skip
    deleteMany?: UserRolesScalarWhereInput | UserRolesScalarWhereInput[] | $Types.Skip
  }

  export type UserRolesCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRolesCreateWithoutUsersInput, UserRolesUncheckedCreateWithoutUsersInput> | UserRolesCreateWithoutUsersInput[] | UserRolesUncheckedCreateWithoutUsersInput[] | $Types.Skip
    connectOrCreate?: UserRolesCreateOrConnectWithoutUsersInput | UserRolesCreateOrConnectWithoutUsersInput[] | $Types.Skip
    createMany?: UserRolesCreateManyUsersInputEnvelope | $Types.Skip
    connect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: OrdersCreateManyUserInputEnvelope | $Types.Skip
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: LikesCreateManyUserInputEnvelope | $Types.Skip
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
  }

  export type CartsCreateNestedManyWithoutUserInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: CartsCreateManyUserInputEnvelope | $Types.Skip
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
  }

  export type UserRolesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRolesCreateWithoutUsersInput, UserRolesUncheckedCreateWithoutUsersInput> | UserRolesCreateWithoutUsersInput[] | UserRolesUncheckedCreateWithoutUsersInput[] | $Types.Skip
    connectOrCreate?: UserRolesCreateOrConnectWithoutUsersInput | UserRolesCreateOrConnectWithoutUsersInput[] | $Types.Skip
    createMany?: UserRolesCreateManyUsersInputEnvelope | $Types.Skip
    connect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: OrdersCreateManyUserInputEnvelope | $Types.Skip
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: LikesCreateManyUserInputEnvelope | $Types.Skip
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
  }

  export type CartsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: CartsCreateManyUserInputEnvelope | $Types.Skip
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
  }

  export type UserRolesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserRolesCreateWithoutUsersInput, UserRolesUncheckedCreateWithoutUsersInput> | UserRolesCreateWithoutUsersInput[] | UserRolesUncheckedCreateWithoutUsersInput[] | $Types.Skip
    connectOrCreate?: UserRolesCreateOrConnectWithoutUsersInput | UserRolesCreateOrConnectWithoutUsersInput[] | $Types.Skip
    upsert?: UserRolesUpsertWithWhereUniqueWithoutUsersInput | UserRolesUpsertWithWhereUniqueWithoutUsersInput[] | $Types.Skip
    createMany?: UserRolesCreateManyUsersInputEnvelope | $Types.Skip
    set?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    disconnect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    delete?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    connect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    update?: UserRolesUpdateWithWhereUniqueWithoutUsersInput | UserRolesUpdateWithWhereUniqueWithoutUsersInput[] | $Types.Skip
    updateMany?: UserRolesUpdateManyWithWhereWithoutUsersInput | UserRolesUpdateManyWithWhereWithoutUsersInput[] | $Types.Skip
    deleteMany?: UserRolesScalarWhereInput | UserRolesScalarWhereInput[] | $Types.Skip
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: OrdersCreateManyUserInputEnvelope | $Types.Skip
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[] | $Types.Skip
  }

  export type LikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: LikesCreateManyUserInputEnvelope | $Types.Skip
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[] | $Types.Skip
  }

  export type CartsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: CartsUpsertWithWhereUniqueWithoutUserInput | CartsUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: CartsCreateManyUserInputEnvelope | $Types.Skip
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
    update?: CartsUpdateWithWhereUniqueWithoutUserInput | CartsUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: CartsUpdateManyWithWhereWithoutUserInput | CartsUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[] | $Types.Skip
  }

  export type UserRolesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserRolesCreateWithoutUsersInput, UserRolesUncheckedCreateWithoutUsersInput> | UserRolesCreateWithoutUsersInput[] | UserRolesUncheckedCreateWithoutUsersInput[] | $Types.Skip
    connectOrCreate?: UserRolesCreateOrConnectWithoutUsersInput | UserRolesCreateOrConnectWithoutUsersInput[] | $Types.Skip
    upsert?: UserRolesUpsertWithWhereUniqueWithoutUsersInput | UserRolesUpsertWithWhereUniqueWithoutUsersInput[] | $Types.Skip
    createMany?: UserRolesCreateManyUsersInputEnvelope | $Types.Skip
    set?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    disconnect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    delete?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    connect?: UserRolesWhereUniqueInput | UserRolesWhereUniqueInput[] | $Types.Skip
    update?: UserRolesUpdateWithWhereUniqueWithoutUsersInput | UserRolesUpdateWithWhereUniqueWithoutUsersInput[] | $Types.Skip
    updateMany?: UserRolesUpdateManyWithWhereWithoutUsersInput | UserRolesUpdateManyWithWhereWithoutUsersInput[] | $Types.Skip
    deleteMany?: UserRolesScalarWhereInput | UserRolesScalarWhereInput[] | $Types.Skip
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: OrdersCreateManyUserInputEnvelope | $Types.Skip
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[] | $Types.Skip
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[] | $Types.Skip
  }

  export type LikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: LikesCreateManyUserInputEnvelope | $Types.Skip
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[] | $Types.Skip
  }

  export type CartsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: CartsUpsertWithWhereUniqueWithoutUserInput | CartsUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: CartsCreateManyUserInputEnvelope | $Types.Skip
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[] | $Types.Skip
    update?: CartsUpdateWithWhereUniqueWithoutUserInput | CartsUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: CartsUpdateManyWithWhereWithoutUserInput | CartsUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[] | $Types.Skip
  }

  export type UsersCreateNestedOneWithoutRolesInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | $Types.Skip
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | $Types.Skip
    connect?: UsersWhereUniqueInput | $Types.Skip
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput> | $Types.Skip
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput | $Types.Skip
    connect?: RolesWhereUniqueInput | $Types.Skip
  }

  export type UsersUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput> | $Types.Skip
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput | $Types.Skip
    upsert?: UsersUpsertWithoutRolesInput | $Types.Skip
    connect?: UsersWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRolesInput, UsersUpdateWithoutRolesInput>, UsersUncheckedUpdateWithoutRolesInput> | $Types.Skip
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput> | $Types.Skip
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput | $Types.Skip
    upsert?: RolesUpsertWithoutUsersInput | $Types.Skip
    connect?: RolesWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput> | $Types.Skip
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput> | $Types.Skip
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput | $Types.Skip
    connect?: UsersWhereUniqueInput | $Types.Skip
  }

  export type OrderDetailsCreateNestedManyWithoutOrderDetailsInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderDetailsInput, OrderDetailsUncheckedCreateWithoutOrderDetailsInput> | OrderDetailsCreateWithoutOrderDetailsInput[] | OrderDetailsUncheckedCreateWithoutOrderDetailsInput[] | $Types.Skip
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderDetailsInput | OrderDetailsCreateOrConnectWithoutOrderDetailsInput[] | $Types.Skip
    createMany?: OrderDetailsCreateManyOrderDetailsInputEnvelope | $Types.Skip
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
  }

  export type PaymentsCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | $Types.Skip
    connect?: PaymentsWhereUniqueInput | $Types.Skip
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutOrderDetailsInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderDetailsInput, OrderDetailsUncheckedCreateWithoutOrderDetailsInput> | OrderDetailsCreateWithoutOrderDetailsInput[] | OrderDetailsUncheckedCreateWithoutOrderDetailsInput[] | $Types.Skip
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderDetailsInput | OrderDetailsCreateOrConnectWithoutOrderDetailsInput[] | $Types.Skip
    createMany?: OrderDetailsCreateManyOrderDetailsInputEnvelope | $Types.Skip
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
  }

  export type PaymentsUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | $Types.Skip
    connect?: PaymentsWhereUniqueInput | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput> | $Types.Skip
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput | $Types.Skip
    upsert?: UsersUpsertWithoutOrdersInput | $Types.Skip
    connect?: UsersWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput> | $Types.Skip
  }

  export type OrderDetailsUpdateManyWithoutOrderDetailsNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderDetailsInput, OrderDetailsUncheckedCreateWithoutOrderDetailsInput> | OrderDetailsCreateWithoutOrderDetailsInput[] | OrderDetailsUncheckedCreateWithoutOrderDetailsInput[] | $Types.Skip
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderDetailsInput | OrderDetailsCreateOrConnectWithoutOrderDetailsInput[] | $Types.Skip
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderDetailsInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderDetailsInput[] | $Types.Skip
    createMany?: OrderDetailsCreateManyOrderDetailsInputEnvelope | $Types.Skip
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderDetailsInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderDetailsInput[] | $Types.Skip
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderDetailsInput | OrderDetailsUpdateManyWithWhereWithoutOrderDetailsInput[] | $Types.Skip
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[] | $Types.Skip
  }

  export type PaymentsUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | $Types.Skip
    upsert?: PaymentsUpsertWithoutOrderInput | $Types.Skip
    disconnect?: PaymentsWhereInput | boolean | $Types.Skip
    delete?: PaymentsWhereInput | boolean | $Types.Skip
    connect?: PaymentsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput> | $Types.Skip
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderDetailsNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderDetailsInput, OrderDetailsUncheckedCreateWithoutOrderDetailsInput> | OrderDetailsCreateWithoutOrderDetailsInput[] | OrderDetailsUncheckedCreateWithoutOrderDetailsInput[] | $Types.Skip
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderDetailsInput | OrderDetailsCreateOrConnectWithoutOrderDetailsInput[] | $Types.Skip
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderDetailsInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderDetailsInput[] | $Types.Skip
    createMany?: OrderDetailsCreateManyOrderDetailsInputEnvelope | $Types.Skip
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderDetailsInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderDetailsInput[] | $Types.Skip
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderDetailsInput | OrderDetailsUpdateManyWithWhereWithoutOrderDetailsInput[] | $Types.Skip
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[] | $Types.Skip
  }

  export type PaymentsUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | $Types.Skip
    upsert?: PaymentsUpsertWithoutOrderInput | $Types.Skip
    disconnect?: PaymentsWhereInput | boolean | $Types.Skip
    delete?: PaymentsWhereInput | boolean | $Types.Skip
    connect?: PaymentsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput> | $Types.Skip
  }

  export type OrdersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput> | $Types.Skip
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput | $Types.Skip
    connect?: OrdersWhereUniqueInput | $Types.Skip
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type OrdersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput> | $Types.Skip
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput | $Types.Skip
    upsert?: OrdersUpsertWithoutPaymentInput | $Types.Skip
    connect?: OrdersWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentInput, OrdersUpdateWithoutPaymentInput>, OrdersUncheckedUpdateWithoutPaymentInput> | $Types.Skip
  }

  export type OrdersCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<OrdersCreateWithoutOrderDetailsInput, OrdersUncheckedCreateWithoutOrderDetailsInput> | $Types.Skip
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderDetailsInput | $Types.Skip
    connect?: OrdersWhereUniqueInput | $Types.Skip
  }

  export type VariantsCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<VariantsCreateWithoutOrderDetailsInput, VariantsUncheckedCreateWithoutOrderDetailsInput> | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutOrderDetailsInput | $Types.Skip
    connect?: VariantsWhereUniqueInput | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type OrdersUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderDetailsInput, OrdersUncheckedCreateWithoutOrderDetailsInput> | $Types.Skip
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderDetailsInput | $Types.Skip
    upsert?: OrdersUpsertWithoutOrderDetailsInput | $Types.Skip
    connect?: OrdersWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderDetailsInput, OrdersUpdateWithoutOrderDetailsInput>, OrdersUncheckedUpdateWithoutOrderDetailsInput> | $Types.Skip
  }

  export type VariantsUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<VariantsCreateWithoutOrderDetailsInput, VariantsUncheckedCreateWithoutOrderDetailsInput> | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutOrderDetailsInput | $Types.Skip
    upsert?: VariantsUpsertWithoutOrderDetailsInput | $Types.Skip
    connect?: VariantsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<VariantsUpdateToOneWithWhereWithoutOrderDetailsInput, VariantsUpdateWithoutOrderDetailsInput>, VariantsUncheckedUpdateWithoutOrderDetailsInput> | $Types.Skip
  }

  export type BrandsCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput> | $Types.Skip
    connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput | $Types.Skip
    connect?: BrandsWhereUniqueInput | $Types.Skip
  }

  export type VariantsCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantsCreateWithoutProductInput, VariantsUncheckedCreateWithoutProductInput> | VariantsCreateWithoutProductInput[] | VariantsUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutProductInput | VariantsCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: VariantsCreateManyProductInputEnvelope | $Types.Skip
    connect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
  }

  export type ProductCategoriesCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput> | ProductCategoriesCreateWithoutProductsInput[] | ProductCategoriesUncheckedCreateWithoutProductsInput[] | $Types.Skip
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutProductsInput | ProductCategoriesCreateOrConnectWithoutProductsInput[] | $Types.Skip
    createMany?: ProductCategoriesCreateManyProductsInputEnvelope | $Types.Skip
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
  }

  export type LikesCreateNestedManyWithoutProductsInput = {
    create?: XOR<LikesCreateWithoutProductsInput, LikesUncheckedCreateWithoutProductsInput> | LikesCreateWithoutProductsInput[] | LikesUncheckedCreateWithoutProductsInput[] | $Types.Skip
    connectOrCreate?: LikesCreateOrConnectWithoutProductsInput | LikesCreateOrConnectWithoutProductsInput[] | $Types.Skip
    createMany?: LikesCreateManyProductsInputEnvelope | $Types.Skip
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
  }

  export type VariantsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantsCreateWithoutProductInput, VariantsUncheckedCreateWithoutProductInput> | VariantsCreateWithoutProductInput[] | VariantsUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutProductInput | VariantsCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: VariantsCreateManyProductInputEnvelope | $Types.Skip
    connect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
  }

  export type ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput> | ProductCategoriesCreateWithoutProductsInput[] | ProductCategoriesUncheckedCreateWithoutProductsInput[] | $Types.Skip
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutProductsInput | ProductCategoriesCreateOrConnectWithoutProductsInput[] | $Types.Skip
    createMany?: ProductCategoriesCreateManyProductsInputEnvelope | $Types.Skip
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
  }

  export type LikesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<LikesCreateWithoutProductsInput, LikesUncheckedCreateWithoutProductsInput> | LikesCreateWithoutProductsInput[] | LikesUncheckedCreateWithoutProductsInput[] | $Types.Skip
    connectOrCreate?: LikesCreateOrConnectWithoutProductsInput | LikesCreateOrConnectWithoutProductsInput[] | $Types.Skip
    createMany?: LikesCreateManyProductsInputEnvelope | $Types.Skip
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean | $Types.Skip
  }

  export type BrandsUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput> | $Types.Skip
    connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput | $Types.Skip
    upsert?: BrandsUpsertWithoutProductsInput | $Types.Skip
    connect?: BrandsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<BrandsUpdateToOneWithWhereWithoutProductsInput, BrandsUpdateWithoutProductsInput>, BrandsUncheckedUpdateWithoutProductsInput> | $Types.Skip
  }

  export type VariantsUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantsCreateWithoutProductInput, VariantsUncheckedCreateWithoutProductInput> | VariantsCreateWithoutProductInput[] | VariantsUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutProductInput | VariantsCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: VariantsUpsertWithWhereUniqueWithoutProductInput | VariantsUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: VariantsCreateManyProductInputEnvelope | $Types.Skip
    set?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    disconnect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    delete?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    connect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    update?: VariantsUpdateWithWhereUniqueWithoutProductInput | VariantsUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: VariantsUpdateManyWithWhereWithoutProductInput | VariantsUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: VariantsScalarWhereInput | VariantsScalarWhereInput[] | $Types.Skip
  }

  export type ProductCategoriesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput> | ProductCategoriesCreateWithoutProductsInput[] | ProductCategoriesUncheckedCreateWithoutProductsInput[] | $Types.Skip
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutProductsInput | ProductCategoriesCreateOrConnectWithoutProductsInput[] | $Types.Skip
    upsert?: ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput | ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput[] | $Types.Skip
    createMany?: ProductCategoriesCreateManyProductsInputEnvelope | $Types.Skip
    set?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    disconnect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    delete?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    update?: ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput | ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput[] | $Types.Skip
    updateMany?: ProductCategoriesUpdateManyWithWhereWithoutProductsInput | ProductCategoriesUpdateManyWithWhereWithoutProductsInput[] | $Types.Skip
    deleteMany?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[] | $Types.Skip
  }

  export type LikesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<LikesCreateWithoutProductsInput, LikesUncheckedCreateWithoutProductsInput> | LikesCreateWithoutProductsInput[] | LikesUncheckedCreateWithoutProductsInput[] | $Types.Skip
    connectOrCreate?: LikesCreateOrConnectWithoutProductsInput | LikesCreateOrConnectWithoutProductsInput[] | $Types.Skip
    upsert?: LikesUpsertWithWhereUniqueWithoutProductsInput | LikesUpsertWithWhereUniqueWithoutProductsInput[] | $Types.Skip
    createMany?: LikesCreateManyProductsInputEnvelope | $Types.Skip
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    update?: LikesUpdateWithWhereUniqueWithoutProductsInput | LikesUpdateWithWhereUniqueWithoutProductsInput[] | $Types.Skip
    updateMany?: LikesUpdateManyWithWhereWithoutProductsInput | LikesUpdateManyWithWhereWithoutProductsInput[] | $Types.Skip
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[] | $Types.Skip
  }

  export type VariantsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantsCreateWithoutProductInput, VariantsUncheckedCreateWithoutProductInput> | VariantsCreateWithoutProductInput[] | VariantsUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutProductInput | VariantsCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: VariantsUpsertWithWhereUniqueWithoutProductInput | VariantsUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: VariantsCreateManyProductInputEnvelope | $Types.Skip
    set?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    disconnect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    delete?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    connect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    update?: VariantsUpdateWithWhereUniqueWithoutProductInput | VariantsUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: VariantsUpdateManyWithWhereWithoutProductInput | VariantsUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: VariantsScalarWhereInput | VariantsScalarWhereInput[] | $Types.Skip
  }

  export type ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput> | ProductCategoriesCreateWithoutProductsInput[] | ProductCategoriesUncheckedCreateWithoutProductsInput[] | $Types.Skip
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutProductsInput | ProductCategoriesCreateOrConnectWithoutProductsInput[] | $Types.Skip
    upsert?: ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput | ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput[] | $Types.Skip
    createMany?: ProductCategoriesCreateManyProductsInputEnvelope | $Types.Skip
    set?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    disconnect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    delete?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    update?: ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput | ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput[] | $Types.Skip
    updateMany?: ProductCategoriesUpdateManyWithWhereWithoutProductsInput | ProductCategoriesUpdateManyWithWhereWithoutProductsInput[] | $Types.Skip
    deleteMany?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[] | $Types.Skip
  }

  export type LikesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<LikesCreateWithoutProductsInput, LikesUncheckedCreateWithoutProductsInput> | LikesCreateWithoutProductsInput[] | LikesUncheckedCreateWithoutProductsInput[] | $Types.Skip
    connectOrCreate?: LikesCreateOrConnectWithoutProductsInput | LikesCreateOrConnectWithoutProductsInput[] | $Types.Skip
    upsert?: LikesUpsertWithWhereUniqueWithoutProductsInput | LikesUpsertWithWhereUniqueWithoutProductsInput[] | $Types.Skip
    createMany?: LikesCreateManyProductsInputEnvelope | $Types.Skip
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[] | $Types.Skip
    update?: LikesUpdateWithWhereUniqueWithoutProductsInput | LikesUpdateWithWhereUniqueWithoutProductsInput[] | $Types.Skip
    updateMany?: LikesUpdateManyWithWhereWithoutProductsInput | LikesUpdateManyWithWhereWithoutProductsInput[] | $Types.Skip
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[] | $Types.Skip
  }

  export type ProductsCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput> | ProductsCreateWithoutBrandInput[] | ProductsUncheckedCreateWithoutBrandInput[] | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutBrandInput | ProductsCreateOrConnectWithoutBrandInput[] | $Types.Skip
    createMany?: ProductsCreateManyBrandInputEnvelope | $Types.Skip
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
  }

  export type ProductsUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput> | ProductsCreateWithoutBrandInput[] | ProductsUncheckedCreateWithoutBrandInput[] | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutBrandInput | ProductsCreateOrConnectWithoutBrandInput[] | $Types.Skip
    createMany?: ProductsCreateManyBrandInputEnvelope | $Types.Skip
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
  }

  export type ProductsUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput> | ProductsCreateWithoutBrandInput[] | ProductsUncheckedCreateWithoutBrandInput[] | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutBrandInput | ProductsCreateOrConnectWithoutBrandInput[] | $Types.Skip
    upsert?: ProductsUpsertWithWhereUniqueWithoutBrandInput | ProductsUpsertWithWhereUniqueWithoutBrandInput[] | $Types.Skip
    createMany?: ProductsCreateManyBrandInputEnvelope | $Types.Skip
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
    update?: ProductsUpdateWithWhereUniqueWithoutBrandInput | ProductsUpdateWithWhereUniqueWithoutBrandInput[] | $Types.Skip
    updateMany?: ProductsUpdateManyWithWhereWithoutBrandInput | ProductsUpdateManyWithWhereWithoutBrandInput[] | $Types.Skip
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[] | $Types.Skip
  }

  export type ProductsUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput> | ProductsCreateWithoutBrandInput[] | ProductsUncheckedCreateWithoutBrandInput[] | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutBrandInput | ProductsCreateOrConnectWithoutBrandInput[] | $Types.Skip
    upsert?: ProductsUpsertWithWhereUniqueWithoutBrandInput | ProductsUpsertWithWhereUniqueWithoutBrandInput[] | $Types.Skip
    createMany?: ProductsCreateManyBrandInputEnvelope | $Types.Skip
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[] | $Types.Skip
    update?: ProductsUpdateWithWhereUniqueWithoutBrandInput | ProductsUpdateWithWhereUniqueWithoutBrandInput[] | $Types.Skip
    updateMany?: ProductsUpdateManyWithWhereWithoutBrandInput | ProductsUpdateManyWithWhereWithoutBrandInput[] | $Types.Skip
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[] | $Types.Skip
  }

  export type ProductsCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductsCreateWithoutVariantsInput, ProductsUncheckedCreateWithoutVariantsInput> | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutVariantsInput | $Types.Skip
    connect?: ProductsWhereUniqueInput | $Types.Skip
  }

  export type FilesCreateNestedOneWithoutVariantsInput = {
    create?: XOR<FilesCreateWithoutVariantsInput, FilesUncheckedCreateWithoutVariantsInput> | $Types.Skip
    connectOrCreate?: FilesCreateOrConnectWithoutVariantsInput | $Types.Skip
    connect?: FilesWhereUniqueInput | $Types.Skip
  }

  export type OrderDetailsCreateNestedManyWithoutVariantsInput = {
    create?: XOR<OrderDetailsCreateWithoutVariantsInput, OrderDetailsUncheckedCreateWithoutVariantsInput> | OrderDetailsCreateWithoutVariantsInput[] | OrderDetailsUncheckedCreateWithoutVariantsInput[] | $Types.Skip
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutVariantsInput | OrderDetailsCreateOrConnectWithoutVariantsInput[] | $Types.Skip
    createMany?: OrderDetailsCreateManyVariantsInputEnvelope | $Types.Skip
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
  }

  export type CartDetailsCreateNestedManyWithoutVariantsInput = {
    create?: XOR<CartDetailsCreateWithoutVariantsInput, CartDetailsUncheckedCreateWithoutVariantsInput> | CartDetailsCreateWithoutVariantsInput[] | CartDetailsUncheckedCreateWithoutVariantsInput[] | $Types.Skip
    connectOrCreate?: CartDetailsCreateOrConnectWithoutVariantsInput | CartDetailsCreateOrConnectWithoutVariantsInput[] | $Types.Skip
    createMany?: CartDetailsCreateManyVariantsInputEnvelope | $Types.Skip
    connect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutVariantsInput = {
    create?: XOR<OrderDetailsCreateWithoutVariantsInput, OrderDetailsUncheckedCreateWithoutVariantsInput> | OrderDetailsCreateWithoutVariantsInput[] | OrderDetailsUncheckedCreateWithoutVariantsInput[] | $Types.Skip
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutVariantsInput | OrderDetailsCreateOrConnectWithoutVariantsInput[] | $Types.Skip
    createMany?: OrderDetailsCreateManyVariantsInputEnvelope | $Types.Skip
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
  }

  export type CartDetailsUncheckedCreateNestedManyWithoutVariantsInput = {
    create?: XOR<CartDetailsCreateWithoutVariantsInput, CartDetailsUncheckedCreateWithoutVariantsInput> | CartDetailsCreateWithoutVariantsInput[] | CartDetailsUncheckedCreateWithoutVariantsInput[] | $Types.Skip
    connectOrCreate?: CartDetailsCreateOrConnectWithoutVariantsInput | CartDetailsCreateOrConnectWithoutVariantsInput[] | $Types.Skip
    createMany?: CartDetailsCreateManyVariantsInputEnvelope | $Types.Skip
    connect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
  }

  export type EnumSizeFieldUpdateOperationsInput = {
    set?: $Enums.Size | $Types.Skip
  }

  export type EnumTextColorFieldUpdateOperationsInput = {
    set?: $Enums.TextColor | $Types.Skip
  }

  export type ProductsUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductsCreateWithoutVariantsInput, ProductsUncheckedCreateWithoutVariantsInput> | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutVariantsInput | $Types.Skip
    upsert?: ProductsUpsertWithoutVariantsInput | $Types.Skip
    connect?: ProductsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutVariantsInput, ProductsUpdateWithoutVariantsInput>, ProductsUncheckedUpdateWithoutVariantsInput> | $Types.Skip
  }

  export type FilesUpdateOneWithoutVariantsNestedInput = {
    create?: XOR<FilesCreateWithoutVariantsInput, FilesUncheckedCreateWithoutVariantsInput> | $Types.Skip
    connectOrCreate?: FilesCreateOrConnectWithoutVariantsInput | $Types.Skip
    upsert?: FilesUpsertWithoutVariantsInput | $Types.Skip
    disconnect?: FilesWhereInput | boolean | $Types.Skip
    delete?: FilesWhereInput | boolean | $Types.Skip
    connect?: FilesWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<FilesUpdateToOneWithWhereWithoutVariantsInput, FilesUpdateWithoutVariantsInput>, FilesUncheckedUpdateWithoutVariantsInput> | $Types.Skip
  }

  export type OrderDetailsUpdateManyWithoutVariantsNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutVariantsInput, OrderDetailsUncheckedCreateWithoutVariantsInput> | OrderDetailsCreateWithoutVariantsInput[] | OrderDetailsUncheckedCreateWithoutVariantsInput[] | $Types.Skip
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutVariantsInput | OrderDetailsCreateOrConnectWithoutVariantsInput[] | $Types.Skip
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutVariantsInput | OrderDetailsUpsertWithWhereUniqueWithoutVariantsInput[] | $Types.Skip
    createMany?: OrderDetailsCreateManyVariantsInputEnvelope | $Types.Skip
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    update?: OrderDetailsUpdateWithWhereUniqueWithoutVariantsInput | OrderDetailsUpdateWithWhereUniqueWithoutVariantsInput[] | $Types.Skip
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutVariantsInput | OrderDetailsUpdateManyWithWhereWithoutVariantsInput[] | $Types.Skip
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[] | $Types.Skip
  }

  export type CartDetailsUpdateManyWithoutVariantsNestedInput = {
    create?: XOR<CartDetailsCreateWithoutVariantsInput, CartDetailsUncheckedCreateWithoutVariantsInput> | CartDetailsCreateWithoutVariantsInput[] | CartDetailsUncheckedCreateWithoutVariantsInput[] | $Types.Skip
    connectOrCreate?: CartDetailsCreateOrConnectWithoutVariantsInput | CartDetailsCreateOrConnectWithoutVariantsInput[] | $Types.Skip
    upsert?: CartDetailsUpsertWithWhereUniqueWithoutVariantsInput | CartDetailsUpsertWithWhereUniqueWithoutVariantsInput[] | $Types.Skip
    createMany?: CartDetailsCreateManyVariantsInputEnvelope | $Types.Skip
    set?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    disconnect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    delete?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    connect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    update?: CartDetailsUpdateWithWhereUniqueWithoutVariantsInput | CartDetailsUpdateWithWhereUniqueWithoutVariantsInput[] | $Types.Skip
    updateMany?: CartDetailsUpdateManyWithWhereWithoutVariantsInput | CartDetailsUpdateManyWithWhereWithoutVariantsInput[] | $Types.Skip
    deleteMany?: CartDetailsScalarWhereInput | CartDetailsScalarWhereInput[] | $Types.Skip
  }

  export type OrderDetailsUncheckedUpdateManyWithoutVariantsNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutVariantsInput, OrderDetailsUncheckedCreateWithoutVariantsInput> | OrderDetailsCreateWithoutVariantsInput[] | OrderDetailsUncheckedCreateWithoutVariantsInput[] | $Types.Skip
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutVariantsInput | OrderDetailsCreateOrConnectWithoutVariantsInput[] | $Types.Skip
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutVariantsInput | OrderDetailsUpsertWithWhereUniqueWithoutVariantsInput[] | $Types.Skip
    createMany?: OrderDetailsCreateManyVariantsInputEnvelope | $Types.Skip
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[] | $Types.Skip
    update?: OrderDetailsUpdateWithWhereUniqueWithoutVariantsInput | OrderDetailsUpdateWithWhereUniqueWithoutVariantsInput[] | $Types.Skip
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutVariantsInput | OrderDetailsUpdateManyWithWhereWithoutVariantsInput[] | $Types.Skip
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[] | $Types.Skip
  }

  export type CartDetailsUncheckedUpdateManyWithoutVariantsNestedInput = {
    create?: XOR<CartDetailsCreateWithoutVariantsInput, CartDetailsUncheckedCreateWithoutVariantsInput> | CartDetailsCreateWithoutVariantsInput[] | CartDetailsUncheckedCreateWithoutVariantsInput[] | $Types.Skip
    connectOrCreate?: CartDetailsCreateOrConnectWithoutVariantsInput | CartDetailsCreateOrConnectWithoutVariantsInput[] | $Types.Skip
    upsert?: CartDetailsUpsertWithWhereUniqueWithoutVariantsInput | CartDetailsUpsertWithWhereUniqueWithoutVariantsInput[] | $Types.Skip
    createMany?: CartDetailsCreateManyVariantsInputEnvelope | $Types.Skip
    set?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    disconnect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    delete?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    connect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    update?: CartDetailsUpdateWithWhereUniqueWithoutVariantsInput | CartDetailsUpdateWithWhereUniqueWithoutVariantsInput[] | $Types.Skip
    updateMany?: CartDetailsUpdateManyWithWhereWithoutVariantsInput | CartDetailsUpdateManyWithWhereWithoutVariantsInput[] | $Types.Skip
    deleteMany?: CartDetailsScalarWhereInput | CartDetailsScalarWhereInput[] | $Types.Skip
  }

  export type VariantsCreateNestedManyWithoutFileInput = {
    create?: XOR<VariantsCreateWithoutFileInput, VariantsUncheckedCreateWithoutFileInput> | VariantsCreateWithoutFileInput[] | VariantsUncheckedCreateWithoutFileInput[] | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutFileInput | VariantsCreateOrConnectWithoutFileInput[] | $Types.Skip
    createMany?: VariantsCreateManyFileInputEnvelope | $Types.Skip
    connect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
  }

  export type VariantsUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<VariantsCreateWithoutFileInput, VariantsUncheckedCreateWithoutFileInput> | VariantsCreateWithoutFileInput[] | VariantsUncheckedCreateWithoutFileInput[] | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutFileInput | VariantsCreateOrConnectWithoutFileInput[] | $Types.Skip
    createMany?: VariantsCreateManyFileInputEnvelope | $Types.Skip
    connect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type VariantsUpdateManyWithoutFileNestedInput = {
    create?: XOR<VariantsCreateWithoutFileInput, VariantsUncheckedCreateWithoutFileInput> | VariantsCreateWithoutFileInput[] | VariantsUncheckedCreateWithoutFileInput[] | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutFileInput | VariantsCreateOrConnectWithoutFileInput[] | $Types.Skip
    upsert?: VariantsUpsertWithWhereUniqueWithoutFileInput | VariantsUpsertWithWhereUniqueWithoutFileInput[] | $Types.Skip
    createMany?: VariantsCreateManyFileInputEnvelope | $Types.Skip
    set?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    disconnect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    delete?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    connect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    update?: VariantsUpdateWithWhereUniqueWithoutFileInput | VariantsUpdateWithWhereUniqueWithoutFileInput[] | $Types.Skip
    updateMany?: VariantsUpdateManyWithWhereWithoutFileInput | VariantsUpdateManyWithWhereWithoutFileInput[] | $Types.Skip
    deleteMany?: VariantsScalarWhereInput | VariantsScalarWhereInput[] | $Types.Skip
  }

  export type VariantsUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<VariantsCreateWithoutFileInput, VariantsUncheckedCreateWithoutFileInput> | VariantsCreateWithoutFileInput[] | VariantsUncheckedCreateWithoutFileInput[] | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutFileInput | VariantsCreateOrConnectWithoutFileInput[] | $Types.Skip
    upsert?: VariantsUpsertWithWhereUniqueWithoutFileInput | VariantsUpsertWithWhereUniqueWithoutFileInput[] | $Types.Skip
    createMany?: VariantsCreateManyFileInputEnvelope | $Types.Skip
    set?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    disconnect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    delete?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    connect?: VariantsWhereUniqueInput | VariantsWhereUniqueInput[] | $Types.Skip
    update?: VariantsUpdateWithWhereUniqueWithoutFileInput | VariantsUpdateWithWhereUniqueWithoutFileInput[] | $Types.Skip
    updateMany?: VariantsUpdateManyWithWhereWithoutFileInput | VariantsUpdateManyWithWhereWithoutFileInput[] | $Types.Skip
    deleteMany?: VariantsScalarWhereInput | VariantsScalarWhereInput[] | $Types.Skip
  }

  export type CategoriesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<CategoriesCreateWithoutCategoriesInput, CategoriesUncheckedCreateWithoutCategoriesInput> | $Types.Skip
    connectOrCreate?: CategoriesCreateOrConnectWithoutCategoriesInput | $Types.Skip
    connect?: CategoriesWhereUniqueInput | $Types.Skip
  }

  export type ProductCategoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput> | ProductCategoriesCreateWithoutCategoriesInput[] | ProductCategoriesUncheckedCreateWithoutCategoriesInput[] | $Types.Skip
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutCategoriesInput | ProductCategoriesCreateOrConnectWithoutCategoriesInput[] | $Types.Skip
    createMany?: ProductCategoriesCreateManyCategoriesInputEnvelope | $Types.Skip
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
  }

  export type CategoriesCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput> | CategoriesCreateWithoutParentInput[] | CategoriesUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: CategoriesCreateOrConnectWithoutParentInput | CategoriesCreateOrConnectWithoutParentInput[] | $Types.Skip
    createMany?: CategoriesCreateManyParentInputEnvelope | $Types.Skip
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
  }

  export type ProductCategoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput> | ProductCategoriesCreateWithoutCategoriesInput[] | ProductCategoriesUncheckedCreateWithoutCategoriesInput[] | $Types.Skip
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutCategoriesInput | ProductCategoriesCreateOrConnectWithoutCategoriesInput[] | $Types.Skip
    createMany?: ProductCategoriesCreateManyCategoriesInputEnvelope | $Types.Skip
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
  }

  export type CategoriesUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput> | CategoriesCreateWithoutParentInput[] | CategoriesUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: CategoriesCreateOrConnectWithoutParentInput | CategoriesCreateOrConnectWithoutParentInput[] | $Types.Skip
    createMany?: CategoriesCreateManyParentInputEnvelope | $Types.Skip
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
  }

  export type CategoriesUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<CategoriesCreateWithoutCategoriesInput, CategoriesUncheckedCreateWithoutCategoriesInput> | $Types.Skip
    connectOrCreate?: CategoriesCreateOrConnectWithoutCategoriesInput | $Types.Skip
    upsert?: CategoriesUpsertWithoutCategoriesInput | $Types.Skip
    disconnect?: CategoriesWhereInput | boolean | $Types.Skip
    delete?: CategoriesWhereInput | boolean | $Types.Skip
    connect?: CategoriesWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutCategoriesInput, CategoriesUpdateWithoutCategoriesInput>, CategoriesUncheckedUpdateWithoutCategoriesInput> | $Types.Skip
  }

  export type ProductCategoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput> | ProductCategoriesCreateWithoutCategoriesInput[] | ProductCategoriesUncheckedCreateWithoutCategoriesInput[] | $Types.Skip
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutCategoriesInput | ProductCategoriesCreateOrConnectWithoutCategoriesInput[] | $Types.Skip
    upsert?: ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput | ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput[] | $Types.Skip
    createMany?: ProductCategoriesCreateManyCategoriesInputEnvelope | $Types.Skip
    set?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    disconnect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    delete?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    update?: ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput | ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput[] | $Types.Skip
    updateMany?: ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput | ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput[] | $Types.Skip
    deleteMany?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[] | $Types.Skip
  }

  export type CategoriesUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput> | CategoriesCreateWithoutParentInput[] | CategoriesUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: CategoriesCreateOrConnectWithoutParentInput | CategoriesCreateOrConnectWithoutParentInput[] | $Types.Skip
    upsert?: CategoriesUpsertWithWhereUniqueWithoutParentInput | CategoriesUpsertWithWhereUniqueWithoutParentInput[] | $Types.Skip
    createMany?: CategoriesCreateManyParentInputEnvelope | $Types.Skip
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
    update?: CategoriesUpdateWithWhereUniqueWithoutParentInput | CategoriesUpdateWithWhereUniqueWithoutParentInput[] | $Types.Skip
    updateMany?: CategoriesUpdateManyWithWhereWithoutParentInput | CategoriesUpdateManyWithWhereWithoutParentInput[] | $Types.Skip
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[] | $Types.Skip
  }

  export type ProductCategoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput> | ProductCategoriesCreateWithoutCategoriesInput[] | ProductCategoriesUncheckedCreateWithoutCategoriesInput[] | $Types.Skip
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutCategoriesInput | ProductCategoriesCreateOrConnectWithoutCategoriesInput[] | $Types.Skip
    upsert?: ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput | ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput[] | $Types.Skip
    createMany?: ProductCategoriesCreateManyCategoriesInputEnvelope | $Types.Skip
    set?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    disconnect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    delete?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[] | $Types.Skip
    update?: ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput | ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput[] | $Types.Skip
    updateMany?: ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput | ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput[] | $Types.Skip
    deleteMany?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[] | $Types.Skip
  }

  export type CategoriesUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput> | CategoriesCreateWithoutParentInput[] | CategoriesUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: CategoriesCreateOrConnectWithoutParentInput | CategoriesCreateOrConnectWithoutParentInput[] | $Types.Skip
    upsert?: CategoriesUpsertWithWhereUniqueWithoutParentInput | CategoriesUpsertWithWhereUniqueWithoutParentInput[] | $Types.Skip
    createMany?: CategoriesCreateManyParentInputEnvelope | $Types.Skip
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[] | $Types.Skip
    update?: CategoriesUpdateWithWhereUniqueWithoutParentInput | CategoriesUpdateWithWhereUniqueWithoutParentInput[] | $Types.Skip
    updateMany?: CategoriesUpdateManyWithWhereWithoutParentInput | CategoriesUpdateManyWithWhereWithoutParentInput[] | $Types.Skip
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[] | $Types.Skip
  }

  export type ProductsCreateNestedOneWithoutProductCategoriesInput = {
    create?: XOR<ProductsCreateWithoutProductCategoriesInput, ProductsUncheckedCreateWithoutProductCategoriesInput> | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutProductCategoriesInput | $Types.Skip
    connect?: ProductsWhereUniqueInput | $Types.Skip
  }

  export type CategoriesCreateNestedOneWithoutProductCategoriesInput = {
    create?: XOR<CategoriesCreateWithoutProductCategoriesInput, CategoriesUncheckedCreateWithoutProductCategoriesInput> | $Types.Skip
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductCategoriesInput | $Types.Skip
    connect?: CategoriesWhereUniqueInput | $Types.Skip
  }

  export type ProductsUpdateOneRequiredWithoutProductCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutProductCategoriesInput, ProductsUncheckedCreateWithoutProductCategoriesInput> | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutProductCategoriesInput | $Types.Skip
    upsert?: ProductsUpsertWithoutProductCategoriesInput | $Types.Skip
    connect?: ProductsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProductCategoriesInput, ProductsUpdateWithoutProductCategoriesInput>, ProductsUncheckedUpdateWithoutProductCategoriesInput> | $Types.Skip
  }

  export type CategoriesUpdateOneRequiredWithoutProductCategoriesNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductCategoriesInput, CategoriesUncheckedCreateWithoutProductCategoriesInput> | $Types.Skip
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductCategoriesInput | $Types.Skip
    upsert?: CategoriesUpsertWithoutProductCategoriesInput | $Types.Skip
    connect?: CategoriesWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductCategoriesInput, CategoriesUpdateWithoutProductCategoriesInput>, CategoriesUncheckedUpdateWithoutProductCategoriesInput> | $Types.Skip
  }

  export type ProductsCreateNestedOneWithoutLikesInput = {
    create?: XOR<ProductsCreateWithoutLikesInput, ProductsUncheckedCreateWithoutLikesInput> | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutLikesInput | $Types.Skip
    connect?: ProductsWhereUniqueInput | $Types.Skip
  }

  export type UsersCreateNestedOneWithoutLikesInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput> | $Types.Skip
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput | $Types.Skip
    connect?: UsersWhereUniqueInput | $Types.Skip
  }

  export type ProductsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ProductsCreateWithoutLikesInput, ProductsUncheckedCreateWithoutLikesInput> | $Types.Skip
    connectOrCreate?: ProductsCreateOrConnectWithoutLikesInput | $Types.Skip
    upsert?: ProductsUpsertWithoutLikesInput | $Types.Skip
    connect?: ProductsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutLikesInput, ProductsUpdateWithoutLikesInput>, ProductsUncheckedUpdateWithoutLikesInput> | $Types.Skip
  }

  export type UsersUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput> | $Types.Skip
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput | $Types.Skip
    upsert?: UsersUpsertWithoutLikesInput | $Types.Skip
    connect?: UsersWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLikesInput, UsersUpdateWithoutLikesInput>, UsersUncheckedUpdateWithoutLikesInput> | $Types.Skip
  }

  export type VariantsCreateNestedOneWithoutCartDetailsInput = {
    create?: XOR<VariantsCreateWithoutCartDetailsInput, VariantsUncheckedCreateWithoutCartDetailsInput> | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutCartDetailsInput | $Types.Skip
    connect?: VariantsWhereUniqueInput | $Types.Skip
  }

  export type CartsCreateNestedOneWithoutCartDetailsInput = {
    create?: XOR<CartsCreateWithoutCartDetailsInput, CartsUncheckedCreateWithoutCartDetailsInput> | $Types.Skip
    connectOrCreate?: CartsCreateOrConnectWithoutCartDetailsInput | $Types.Skip
    connect?: CartsWhereUniqueInput | $Types.Skip
  }

  export type VariantsUpdateOneRequiredWithoutCartDetailsNestedInput = {
    create?: XOR<VariantsCreateWithoutCartDetailsInput, VariantsUncheckedCreateWithoutCartDetailsInput> | $Types.Skip
    connectOrCreate?: VariantsCreateOrConnectWithoutCartDetailsInput | $Types.Skip
    upsert?: VariantsUpsertWithoutCartDetailsInput | $Types.Skip
    connect?: VariantsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<VariantsUpdateToOneWithWhereWithoutCartDetailsInput, VariantsUpdateWithoutCartDetailsInput>, VariantsUncheckedUpdateWithoutCartDetailsInput> | $Types.Skip
  }

  export type CartsUpdateOneRequiredWithoutCartDetailsNestedInput = {
    create?: XOR<CartsCreateWithoutCartDetailsInput, CartsUncheckedCreateWithoutCartDetailsInput> | $Types.Skip
    connectOrCreate?: CartsCreateOrConnectWithoutCartDetailsInput | $Types.Skip
    upsert?: CartsUpsertWithoutCartDetailsInput | $Types.Skip
    connect?: CartsWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CartsUpdateToOneWithWhereWithoutCartDetailsInput, CartsUpdateWithoutCartDetailsInput>, CartsUncheckedUpdateWithoutCartDetailsInput> | $Types.Skip
  }

  export type UsersCreateNestedOneWithoutCartsInput = {
    create?: XOR<UsersCreateWithoutCartsInput, UsersUncheckedCreateWithoutCartsInput> | $Types.Skip
    connectOrCreate?: UsersCreateOrConnectWithoutCartsInput | $Types.Skip
    connect?: UsersWhereUniqueInput | $Types.Skip
  }

  export type CartDetailsCreateNestedManyWithoutCartInput = {
    create?: XOR<CartDetailsCreateWithoutCartInput, CartDetailsUncheckedCreateWithoutCartInput> | CartDetailsCreateWithoutCartInput[] | CartDetailsUncheckedCreateWithoutCartInput[] | $Types.Skip
    connectOrCreate?: CartDetailsCreateOrConnectWithoutCartInput | CartDetailsCreateOrConnectWithoutCartInput[] | $Types.Skip
    createMany?: CartDetailsCreateManyCartInputEnvelope | $Types.Skip
    connect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
  }

  export type CartDetailsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartDetailsCreateWithoutCartInput, CartDetailsUncheckedCreateWithoutCartInput> | CartDetailsCreateWithoutCartInput[] | CartDetailsUncheckedCreateWithoutCartInput[] | $Types.Skip
    connectOrCreate?: CartDetailsCreateOrConnectWithoutCartInput | CartDetailsCreateOrConnectWithoutCartInput[] | $Types.Skip
    createMany?: CartDetailsCreateManyCartInputEnvelope | $Types.Skip
    connect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
  }

  export type UsersUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<UsersCreateWithoutCartsInput, UsersUncheckedCreateWithoutCartsInput> | $Types.Skip
    connectOrCreate?: UsersCreateOrConnectWithoutCartsInput | $Types.Skip
    upsert?: UsersUpsertWithoutCartsInput | $Types.Skip
    connect?: UsersWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCartsInput, UsersUpdateWithoutCartsInput>, UsersUncheckedUpdateWithoutCartsInput> | $Types.Skip
  }

  export type CartDetailsUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartDetailsCreateWithoutCartInput, CartDetailsUncheckedCreateWithoutCartInput> | CartDetailsCreateWithoutCartInput[] | CartDetailsUncheckedCreateWithoutCartInput[] | $Types.Skip
    connectOrCreate?: CartDetailsCreateOrConnectWithoutCartInput | CartDetailsCreateOrConnectWithoutCartInput[] | $Types.Skip
    upsert?: CartDetailsUpsertWithWhereUniqueWithoutCartInput | CartDetailsUpsertWithWhereUniqueWithoutCartInput[] | $Types.Skip
    createMany?: CartDetailsCreateManyCartInputEnvelope | $Types.Skip
    set?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    disconnect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    delete?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    connect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    update?: CartDetailsUpdateWithWhereUniqueWithoutCartInput | CartDetailsUpdateWithWhereUniqueWithoutCartInput[] | $Types.Skip
    updateMany?: CartDetailsUpdateManyWithWhereWithoutCartInput | CartDetailsUpdateManyWithWhereWithoutCartInput[] | $Types.Skip
    deleteMany?: CartDetailsScalarWhereInput | CartDetailsScalarWhereInput[] | $Types.Skip
  }

  export type CartDetailsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartDetailsCreateWithoutCartInput, CartDetailsUncheckedCreateWithoutCartInput> | CartDetailsCreateWithoutCartInput[] | CartDetailsUncheckedCreateWithoutCartInput[] | $Types.Skip
    connectOrCreate?: CartDetailsCreateOrConnectWithoutCartInput | CartDetailsCreateOrConnectWithoutCartInput[] | $Types.Skip
    upsert?: CartDetailsUpsertWithWhereUniqueWithoutCartInput | CartDetailsUpsertWithWhereUniqueWithoutCartInput[] | $Types.Skip
    createMany?: CartDetailsCreateManyCartInputEnvelope | $Types.Skip
    set?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    disconnect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    delete?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    connect?: CartDetailsWhereUniqueInput | CartDetailsWhereUniqueInput[] | $Types.Skip
    update?: CartDetailsUpdateWithWhereUniqueWithoutCartInput | CartDetailsUpdateWithWhereUniqueWithoutCartInput[] | $Types.Skip
    updateMany?: CartDetailsUpdateManyWithWhereWithoutCartInput | CartDetailsUpdateManyWithWhereWithoutCartInput[] | $Types.Skip
    deleteMany?: CartDetailsScalarWhereInput | CartDetailsScalarWhereInput[] | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _min?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _max?: NestedFloatFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumSizeFilter<$PrismaModel> | $Enums.Size | $Types.Skip
  }

  export type NestedEnumTextColorFilter<$PrismaModel = never> = {
    equals?: $Enums.TextColor | EnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.TextColor[] | ListEnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.TextColor[] | ListEnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTextColorFilter<$PrismaModel> | $Enums.TextColor | $Types.Skip
  }

  export type NestedEnumSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumSizeWithAggregatesFilter<$PrismaModel> | $Enums.Size | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumSizeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumSizeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumTextColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TextColor | EnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.TextColor[] | ListEnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.TextColor[] | ListEnumTextColorFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTextColorWithAggregatesFilter<$PrismaModel> | $Enums.TextColor | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumTextColorFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumTextColorFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type UserRolesCreateWithoutRolesInput = {
    users: UsersCreateNestedOneWithoutRolesInput
  }

  export type UserRolesUncheckedCreateWithoutRolesInput = {
    userId: string
  }

  export type UserRolesCreateOrConnectWithoutRolesInput = {
    where: UserRolesWhereUniqueInput
    create: XOR<UserRolesCreateWithoutRolesInput, UserRolesUncheckedCreateWithoutRolesInput>
  }

  export type UserRolesCreateManyRolesInputEnvelope = {
    data: UserRolesCreateManyRolesInput | UserRolesCreateManyRolesInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type UserRolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserRolesWhereUniqueInput
    update: XOR<UserRolesUpdateWithoutRolesInput, UserRolesUncheckedUpdateWithoutRolesInput>
    create: XOR<UserRolesCreateWithoutRolesInput, UserRolesUncheckedCreateWithoutRolesInput>
  }

  export type UserRolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserRolesWhereUniqueInput
    data: XOR<UserRolesUpdateWithoutRolesInput, UserRolesUncheckedUpdateWithoutRolesInput>
  }

  export type UserRolesUpdateManyWithWhereWithoutRolesInput = {
    where: UserRolesScalarWhereInput
    data: XOR<UserRolesUpdateManyMutationInput, UserRolesUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserRolesScalarWhereInput = {
    AND?: UserRolesScalarWhereInput | UserRolesScalarWhereInput[] | $Types.Skip
    OR?: UserRolesScalarWhereInput[] | $Types.Skip
    NOT?: UserRolesScalarWhereInput | UserRolesScalarWhereInput[] | $Types.Skip
    userId?: StringFilter<"UserRoles"> | string | $Types.Skip
    roleId?: StringFilter<"UserRoles"> | string | $Types.Skip
  }

  export type UserRolesCreateWithoutUsersInput = {
    roles: RolesCreateNestedOneWithoutUsersInput
  }

  export type UserRolesUncheckedCreateWithoutUsersInput = {
    roleId: string
  }

  export type UserRolesCreateOrConnectWithoutUsersInput = {
    where: UserRolesWhereUniqueInput
    create: XOR<UserRolesCreateWithoutUsersInput, UserRolesUncheckedCreateWithoutUsersInput>
  }

  export type UserRolesCreateManyUsersInputEnvelope = {
    data: UserRolesCreateManyUsersInput | UserRolesCreateManyUsersInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type OrdersCreateWithoutUserInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderDetailsInput | $Types.Skip
    payment?: PaymentsCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderDetailsInput | $Types.Skip
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type LikesCreateWithoutUserInput = {
    products: ProductsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    productId: string
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: LikesCreateManyUserInput | LikesCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CartsCreateWithoutUserInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    cartDetails?: CartDetailsCreateNestedManyWithoutCartInput | $Types.Skip
  }

  export type CartsUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    cartDetails?: CartDetailsUncheckedCreateNestedManyWithoutCartInput | $Types.Skip
  }

  export type CartsCreateOrConnectWithoutUserInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
  }

  export type CartsCreateManyUserInputEnvelope = {
    data: CartsCreateManyUserInput | CartsCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type UserRolesUpsertWithWhereUniqueWithoutUsersInput = {
    where: UserRolesWhereUniqueInput
    update: XOR<UserRolesUpdateWithoutUsersInput, UserRolesUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRolesCreateWithoutUsersInput, UserRolesUncheckedCreateWithoutUsersInput>
  }

  export type UserRolesUpdateWithWhereUniqueWithoutUsersInput = {
    where: UserRolesWhereUniqueInput
    data: XOR<UserRolesUpdateWithoutUsersInput, UserRolesUncheckedUpdateWithoutUsersInput>
  }

  export type UserRolesUpdateManyWithWhereWithoutUsersInput = {
    where: UserRolesScalarWhereInput
    data: XOR<UserRolesUpdateManyMutationInput, UserRolesUncheckedUpdateManyWithoutUsersInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[] | $Types.Skip
    OR?: OrdersScalarWhereInput[] | $Types.Skip
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Orders"> | string | $Types.Skip
    created_at?: DateTimeFilter<"Orders"> | Date | string | $Types.Skip
    user_id?: StringFilter<"Orders"> | string | $Types.Skip
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[] | $Types.Skip
    OR?: LikesScalarWhereInput[] | $Types.Skip
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[] | $Types.Skip
    productId?: StringFilter<"Likes"> | string | $Types.Skip
    user_id?: StringFilter<"Likes"> | string | $Types.Skip
  }

  export type CartsUpsertWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput
    update: XOR<CartsUpdateWithoutUserInput, CartsUncheckedUpdateWithoutUserInput>
    create: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
  }

  export type CartsUpdateWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput
    data: XOR<CartsUpdateWithoutUserInput, CartsUncheckedUpdateWithoutUserInput>
  }

  export type CartsUpdateManyWithWhereWithoutUserInput = {
    where: CartsScalarWhereInput
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyWithoutUserInput>
  }

  export type CartsScalarWhereInput = {
    AND?: CartsScalarWhereInput | CartsScalarWhereInput[] | $Types.Skip
    OR?: CartsScalarWhereInput[] | $Types.Skip
    NOT?: CartsScalarWhereInput | CartsScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Carts"> | string | $Types.Skip
    user_id?: StringFilter<"Carts"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Carts"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Carts"> | Date | string | $Types.Skip
  }

  export type UsersCreateWithoutRolesInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    orders?: OrdersCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikesCreateNestedManyWithoutUserInput | $Types.Skip
    carts?: CartsCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersUncheckedCreateWithoutRolesInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    carts?: CartsUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersCreateOrConnectWithoutRolesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
  }

  export type RolesCreateWithoutUsersInput = {
    id?: string | $Types.Skip
    name: string
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    id?: string | $Types.Skip
    name: string
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type UsersUpsertWithoutRolesInput = {
    update: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
    where?: UsersWhereInput | $Types.Skip
  }

  export type UsersUpdateToOneWithWhereWithoutRolesInput = {
    where?: UsersWhereInput | $Types.Skip
    data: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
  }

  export type UsersUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    orders?: OrdersUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikesUpdateManyWithoutUserNestedInput | $Types.Skip
    carts?: CartsUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UsersUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    carts?: CartsUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput | $Types.Skip
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput | $Types.Skip
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UsersCreateWithoutOrdersInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    roles?: UserRolesCreateNestedManyWithoutUsersInput | $Types.Skip
    likes?: LikesCreateNestedManyWithoutUserInput | $Types.Skip
    carts?: CartsCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    roles?: UserRolesUncheckedCreateNestedManyWithoutUsersInput | $Types.Skip
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    carts?: CartsUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type OrderDetailsCreateWithoutOrderDetailsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variants: VariantsCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutOrderDetailsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variant_id: string
  }

  export type OrderDetailsCreateOrConnectWithoutOrderDetailsInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutOrderDetailsInput, OrderDetailsUncheckedCreateWithoutOrderDetailsInput>
  }

  export type OrderDetailsCreateManyOrderDetailsInputEnvelope = {
    data: OrderDetailsCreateManyOrderDetailsInput | OrderDetailsCreateManyOrderDetailsInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PaymentsCreateWithoutOrderInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    status: string
    amount: number
    currency: string
    receipt_url: string
    payment_intent: string
  }

  export type PaymentsUncheckedCreateWithoutOrderInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    status: string
    amount: number
    currency: string
    receipt_url: string
    payment_intent: string
  }

  export type PaymentsCreateOrConnectWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput | $Types.Skip
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput | $Types.Skip
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roles?: UserRolesUpdateManyWithoutUsersNestedInput | $Types.Skip
    likes?: LikesUpdateManyWithoutUserNestedInput | $Types.Skip
    carts?: CartsUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roles?: UserRolesUncheckedUpdateManyWithoutUsersNestedInput | $Types.Skip
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    carts?: CartsUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutOrderDetailsInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutOrderDetailsInput, OrderDetailsUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<OrderDetailsCreateWithoutOrderDetailsInput, OrderDetailsUncheckedCreateWithoutOrderDetailsInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutOrderDetailsInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutOrderDetailsInput, OrderDetailsUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutOrderDetailsInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutOrderDetailsInput>
  }

  export type OrderDetailsScalarWhereInput = {
    AND?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[] | $Types.Skip
    OR?: OrderDetailsScalarWhereInput[] | $Types.Skip
    NOT?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"OrderDetails"> | string | $Types.Skip
    quantity?: IntFilter<"OrderDetails"> | number | $Types.Skip
    price?: FloatFilter<"OrderDetails"> | number | $Types.Skip
    orderDetails_id?: StringFilter<"OrderDetails"> | string | $Types.Skip
    variant_id?: StringFilter<"OrderDetails"> | string | $Types.Skip
  }

  export type PaymentsUpsertWithoutOrderInput = {
    update: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    where?: PaymentsWhereInput | $Types.Skip
  }

  export type PaymentsUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentsWhereInput | $Types.Skip
    data: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    amount?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    currency?: StringFieldUpdateOperationsInput | string | $Types.Skip
    receipt_url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment_intent?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type PaymentsUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    amount?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    currency?: StringFieldUpdateOperationsInput | string | $Types.Skip
    receipt_url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment_intent?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrdersCreateWithoutPaymentInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    user: UsersCreateNestedOneWithoutOrdersInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutOrderDetailsInput | $Types.Skip
  }

  export type OrdersUncheckedCreateWithoutPaymentInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    user_id: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderDetailsInput | $Types.Skip
  }

  export type OrdersCreateOrConnectWithoutPaymentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
  }

  export type OrdersUpsertWithoutPaymentInput = {
    update: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    where?: OrdersWhereInput | $Types.Skip
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrdersWhereInput | $Types.Skip
    data: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
    orderDetails?: OrderDetailsUpdateManyWithoutOrderDetailsNestedInput | $Types.Skip
  }

  export type OrdersUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderDetailsNestedInput | $Types.Skip
  }

  export type OrdersCreateWithoutOrderDetailsInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    user: UsersCreateNestedOneWithoutOrdersInput
    payment?: PaymentsCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrdersUncheckedCreateWithoutOrderDetailsInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
    user_id: string
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrdersCreateOrConnectWithoutOrderDetailsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderDetailsInput, OrdersUncheckedCreateWithoutOrderDetailsInput>
  }

  export type VariantsCreateWithoutOrderDetailsInput = {
    id?: string | $Types.Skip
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    product: ProductsCreateNestedOneWithoutVariantsInput
    file?: FilesCreateNestedOneWithoutVariantsInput | $Types.Skip
    cartDetails?: CartDetailsCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsUncheckedCreateWithoutOrderDetailsInput = {
    id?: string | $Types.Skip
    product_id: string
    file_id: string
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    cartDetails?: CartDetailsUncheckedCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsCreateOrConnectWithoutOrderDetailsInput = {
    where: VariantsWhereUniqueInput
    create: XOR<VariantsCreateWithoutOrderDetailsInput, VariantsUncheckedCreateWithoutOrderDetailsInput>
  }

  export type OrdersUpsertWithoutOrderDetailsInput = {
    update: XOR<OrdersUpdateWithoutOrderDetailsInput, OrdersUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<OrdersCreateWithoutOrderDetailsInput, OrdersUncheckedCreateWithoutOrderDetailsInput>
    where?: OrdersWhereInput | $Types.Skip
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: OrdersWhereInput | $Types.Skip
    data: XOR<OrdersUpdateWithoutOrderDetailsInput, OrdersUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type OrdersUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
    payment?: PaymentsUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrdersUncheckedUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type VariantsUpsertWithoutOrderDetailsInput = {
    update: XOR<VariantsUpdateWithoutOrderDetailsInput, VariantsUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<VariantsCreateWithoutOrderDetailsInput, VariantsUncheckedCreateWithoutOrderDetailsInput>
    where?: VariantsWhereInput | $Types.Skip
  }

  export type VariantsUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: VariantsWhereInput | $Types.Skip
    data: XOR<VariantsUpdateWithoutOrderDetailsInput, VariantsUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type VariantsUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    product?: ProductsUpdateOneRequiredWithoutVariantsNestedInput | $Types.Skip
    file?: FilesUpdateOneWithoutVariantsNestedInput | $Types.Skip
    cartDetails?: CartDetailsUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type VariantsUncheckedUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    product_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    cartDetails?: CartDetailsUncheckedUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type BrandsCreateWithoutProductsInput = {
    id?: string | $Types.Skip
    name: string
  }

  export type BrandsUncheckedCreateWithoutProductsInput = {
    id?: string | $Types.Skip
    name: string
  }

  export type BrandsCreateOrConnectWithoutProductsInput = {
    where: BrandsWhereUniqueInput
    create: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
  }

  export type VariantsCreateWithoutProductInput = {
    id?: string | $Types.Skip
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    file?: FilesCreateNestedOneWithoutVariantsInput | $Types.Skip
    orderDetails?: OrderDetailsCreateNestedManyWithoutVariantsInput | $Types.Skip
    cartDetails?: CartDetailsCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsUncheckedCreateWithoutProductInput = {
    id?: string | $Types.Skip
    file_id: string
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutVariantsInput | $Types.Skip
    cartDetails?: CartDetailsUncheckedCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsCreateOrConnectWithoutProductInput = {
    where: VariantsWhereUniqueInput
    create: XOR<VariantsCreateWithoutProductInput, VariantsUncheckedCreateWithoutProductInput>
  }

  export type VariantsCreateManyProductInputEnvelope = {
    data: VariantsCreateManyProductInput | VariantsCreateManyProductInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProductCategoriesCreateWithoutProductsInput = {
    categories: CategoriesCreateNestedOneWithoutProductCategoriesInput
  }

  export type ProductCategoriesUncheckedCreateWithoutProductsInput = {
    categoryId: string
  }

  export type ProductCategoriesCreateOrConnectWithoutProductsInput = {
    where: ProductCategoriesWhereUniqueInput
    create: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput>
  }

  export type ProductCategoriesCreateManyProductsInputEnvelope = {
    data: ProductCategoriesCreateManyProductsInput | ProductCategoriesCreateManyProductsInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type LikesCreateWithoutProductsInput = {
    user: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutProductsInput = {
    user_id: string
  }

  export type LikesCreateOrConnectWithoutProductsInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutProductsInput, LikesUncheckedCreateWithoutProductsInput>
  }

  export type LikesCreateManyProductsInputEnvelope = {
    data: LikesCreateManyProductsInput | LikesCreateManyProductsInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type BrandsUpsertWithoutProductsInput = {
    update: XOR<BrandsUpdateWithoutProductsInput, BrandsUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
    where?: BrandsWhereInput | $Types.Skip
  }

  export type BrandsUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandsWhereInput | $Types.Skip
    data: XOR<BrandsUpdateWithoutProductsInput, BrandsUncheckedUpdateWithoutProductsInput>
  }

  export type BrandsUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type BrandsUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type VariantsUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantsWhereUniqueInput
    update: XOR<VariantsUpdateWithoutProductInput, VariantsUncheckedUpdateWithoutProductInput>
    create: XOR<VariantsCreateWithoutProductInput, VariantsUncheckedCreateWithoutProductInput>
  }

  export type VariantsUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantsWhereUniqueInput
    data: XOR<VariantsUpdateWithoutProductInput, VariantsUncheckedUpdateWithoutProductInput>
  }

  export type VariantsUpdateManyWithWhereWithoutProductInput = {
    where: VariantsScalarWhereInput
    data: XOR<VariantsUpdateManyMutationInput, VariantsUncheckedUpdateManyWithoutProductInput>
  }

  export type VariantsScalarWhereInput = {
    AND?: VariantsScalarWhereInput | VariantsScalarWhereInput[] | $Types.Skip
    OR?: VariantsScalarWhereInput[] | $Types.Skip
    NOT?: VariantsScalarWhereInput | VariantsScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Variants"> | string | $Types.Skip
    product_id?: StringFilter<"Variants"> | string | $Types.Skip
    file_id?: StringFilter<"Variants"> | string | $Types.Skip
    size?: EnumSizeFilter<"Variants"> | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFilter<"Variants"> | $Enums.TextColor | $Types.Skip
    rgb?: StringFilter<"Variants"> | string | $Types.Skip
    stock?: IntFilter<"Variants"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Variants"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Variants"> | Date | string | $Types.Skip
  }

  export type ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProductCategoriesWhereUniqueInput
    update: XOR<ProductCategoriesUpdateWithoutProductsInput, ProductCategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput>
  }

  export type ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProductCategoriesWhereUniqueInput
    data: XOR<ProductCategoriesUpdateWithoutProductsInput, ProductCategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCategoriesUpdateManyWithWhereWithoutProductsInput = {
    where: ProductCategoriesScalarWhereInput
    data: XOR<ProductCategoriesUpdateManyMutationInput, ProductCategoriesUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductCategoriesScalarWhereInput = {
    AND?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[] | $Types.Skip
    OR?: ProductCategoriesScalarWhereInput[] | $Types.Skip
    NOT?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[] | $Types.Skip
    productId?: StringFilter<"ProductCategories"> | string | $Types.Skip
    categoryId?: StringFilter<"ProductCategories"> | string | $Types.Skip
  }

  export type LikesUpsertWithWhereUniqueWithoutProductsInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutProductsInput, LikesUncheckedUpdateWithoutProductsInput>
    create: XOR<LikesCreateWithoutProductsInput, LikesUncheckedCreateWithoutProductsInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutProductsInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutProductsInput, LikesUncheckedUpdateWithoutProductsInput>
  }

  export type LikesUpdateManyWithWhereWithoutProductsInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductsCreateWithoutBrandInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    variants?: VariantsCreateNestedManyWithoutProductInput | $Types.Skip
    productCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput | $Types.Skip
    likes?: LikesCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsUncheckedCreateWithoutBrandInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    variants?: VariantsUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    productCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput | $Types.Skip
    likes?: LikesUncheckedCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsCreateOrConnectWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput>
  }

  export type ProductsCreateManyBrandInputEnvelope = {
    data: ProductsCreateManyBrandInput | ProductsCreateManyBrandInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProductsUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutBrandInput, ProductsUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutBrandInput, ProductsUncheckedUpdateWithoutBrandInput>
  }

  export type ProductsUpdateManyWithWhereWithoutBrandInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[] | $Types.Skip
    OR?: ProductsScalarWhereInput[] | $Types.Skip
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Products"> | string | $Types.Skip
    name?: StringFilter<"Products"> | string | $Types.Skip
    price?: FloatFilter<"Products"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Products"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Products"> | Date | string | $Types.Skip
    active?: BoolFilter<"Products"> | boolean | $Types.Skip
    brand_id?: StringFilter<"Products"> | string | $Types.Skip
  }

  export type ProductsCreateWithoutVariantsInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand: BrandsCreateNestedOneWithoutProductsInput
    productCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput | $Types.Skip
    likes?: LikesCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsUncheckedCreateWithoutVariantsInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id: string
    productCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput | $Types.Skip
    likes?: LikesUncheckedCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsCreateOrConnectWithoutVariantsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutVariantsInput, ProductsUncheckedCreateWithoutVariantsInput>
  }

  export type FilesCreateWithoutVariantsInput = {
    id?: string | $Types.Skip
    key?: string | $Types.Skip
    file_url?: string | null | $Types.Skip
  }

  export type FilesUncheckedCreateWithoutVariantsInput = {
    id?: string | $Types.Skip
    key?: string | $Types.Skip
    file_url?: string | null | $Types.Skip
  }

  export type FilesCreateOrConnectWithoutVariantsInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutVariantsInput, FilesUncheckedCreateWithoutVariantsInput>
  }

  export type OrderDetailsCreateWithoutVariantsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    orderDetails: OrdersCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutVariantsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    orderDetails_id: string
  }

  export type OrderDetailsCreateOrConnectWithoutVariantsInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutVariantsInput, OrderDetailsUncheckedCreateWithoutVariantsInput>
  }

  export type OrderDetailsCreateManyVariantsInputEnvelope = {
    data: OrderDetailsCreateManyVariantsInput | OrderDetailsCreateManyVariantsInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CartDetailsCreateWithoutVariantsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    cart: CartsCreateNestedOneWithoutCartDetailsInput
  }

  export type CartDetailsUncheckedCreateWithoutVariantsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    cart_id: string
  }

  export type CartDetailsCreateOrConnectWithoutVariantsInput = {
    where: CartDetailsWhereUniqueInput
    create: XOR<CartDetailsCreateWithoutVariantsInput, CartDetailsUncheckedCreateWithoutVariantsInput>
  }

  export type CartDetailsCreateManyVariantsInputEnvelope = {
    data: CartDetailsCreateManyVariantsInput | CartDetailsCreateManyVariantsInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProductsUpsertWithoutVariantsInput = {
    update: XOR<ProductsUpdateWithoutVariantsInput, ProductsUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductsCreateWithoutVariantsInput, ProductsUncheckedCreateWithoutVariantsInput>
    where?: ProductsWhereInput | $Types.Skip
  }

  export type ProductsUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductsWhereInput | $Types.Skip
    data: XOR<ProductsUpdateWithoutVariantsInput, ProductsUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductsUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput | $Types.Skip
    likes?: LikesUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type ProductsUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    productCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput | $Types.Skip
    likes?: LikesUncheckedUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type FilesUpsertWithoutVariantsInput = {
    update: XOR<FilesUpdateWithoutVariantsInput, FilesUncheckedUpdateWithoutVariantsInput>
    create: XOR<FilesCreateWithoutVariantsInput, FilesUncheckedCreateWithoutVariantsInput>
    where?: FilesWhereInput | $Types.Skip
  }

  export type FilesUpdateToOneWithWhereWithoutVariantsInput = {
    where?: FilesWhereInput | $Types.Skip
    data: XOR<FilesUpdateWithoutVariantsInput, FilesUncheckedUpdateWithoutVariantsInput>
  }

  export type FilesUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    key?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type FilesUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    key?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_url?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutVariantsInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutVariantsInput, OrderDetailsUncheckedUpdateWithoutVariantsInput>
    create: XOR<OrderDetailsCreateWithoutVariantsInput, OrderDetailsUncheckedCreateWithoutVariantsInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutVariantsInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutVariantsInput, OrderDetailsUncheckedUpdateWithoutVariantsInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutVariantsInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutVariantsInput>
  }

  export type CartDetailsUpsertWithWhereUniqueWithoutVariantsInput = {
    where: CartDetailsWhereUniqueInput
    update: XOR<CartDetailsUpdateWithoutVariantsInput, CartDetailsUncheckedUpdateWithoutVariantsInput>
    create: XOR<CartDetailsCreateWithoutVariantsInput, CartDetailsUncheckedCreateWithoutVariantsInput>
  }

  export type CartDetailsUpdateWithWhereUniqueWithoutVariantsInput = {
    where: CartDetailsWhereUniqueInput
    data: XOR<CartDetailsUpdateWithoutVariantsInput, CartDetailsUncheckedUpdateWithoutVariantsInput>
  }

  export type CartDetailsUpdateManyWithWhereWithoutVariantsInput = {
    where: CartDetailsScalarWhereInput
    data: XOR<CartDetailsUpdateManyMutationInput, CartDetailsUncheckedUpdateManyWithoutVariantsInput>
  }

  export type CartDetailsScalarWhereInput = {
    AND?: CartDetailsScalarWhereInput | CartDetailsScalarWhereInput[] | $Types.Skip
    OR?: CartDetailsScalarWhereInput[] | $Types.Skip
    NOT?: CartDetailsScalarWhereInput | CartDetailsScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"CartDetails"> | string | $Types.Skip
    quantity?: IntFilter<"CartDetails"> | number | $Types.Skip
    price?: FloatFilter<"CartDetails"> | number | $Types.Skip
    variant_id?: StringFilter<"CartDetails"> | string | $Types.Skip
    cart_id?: StringFilter<"CartDetails"> | string | $Types.Skip
  }

  export type VariantsCreateWithoutFileInput = {
    id?: string | $Types.Skip
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    product: ProductsCreateNestedOneWithoutVariantsInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutVariantsInput | $Types.Skip
    cartDetails?: CartDetailsCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsUncheckedCreateWithoutFileInput = {
    id?: string | $Types.Skip
    product_id: string
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutVariantsInput | $Types.Skip
    cartDetails?: CartDetailsUncheckedCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsCreateOrConnectWithoutFileInput = {
    where: VariantsWhereUniqueInput
    create: XOR<VariantsCreateWithoutFileInput, VariantsUncheckedCreateWithoutFileInput>
  }

  export type VariantsCreateManyFileInputEnvelope = {
    data: VariantsCreateManyFileInput | VariantsCreateManyFileInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type VariantsUpsertWithWhereUniqueWithoutFileInput = {
    where: VariantsWhereUniqueInput
    update: XOR<VariantsUpdateWithoutFileInput, VariantsUncheckedUpdateWithoutFileInput>
    create: XOR<VariantsCreateWithoutFileInput, VariantsUncheckedCreateWithoutFileInput>
  }

  export type VariantsUpdateWithWhereUniqueWithoutFileInput = {
    where: VariantsWhereUniqueInput
    data: XOR<VariantsUpdateWithoutFileInput, VariantsUncheckedUpdateWithoutFileInput>
  }

  export type VariantsUpdateManyWithWhereWithoutFileInput = {
    where: VariantsScalarWhereInput
    data: XOR<VariantsUpdateManyMutationInput, VariantsUncheckedUpdateManyWithoutFileInput>
  }

  export type CategoriesCreateWithoutCategoriesInput = {
    id?: string | $Types.Skip
    name: string
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    parent?: CategoriesCreateNestedOneWithoutCategoriesInput | $Types.Skip
    productCategories?: ProductCategoriesCreateNestedManyWithoutCategoriesInput | $Types.Skip
  }

  export type CategoriesUncheckedCreateWithoutCategoriesInput = {
    id?: string | $Types.Skip
    name: string
    parentId?: string | null | $Types.Skip
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    productCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutCategoriesInput | $Types.Skip
  }

  export type CategoriesCreateOrConnectWithoutCategoriesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutCategoriesInput, CategoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCategoriesCreateWithoutCategoriesInput = {
    products: ProductsCreateNestedOneWithoutProductCategoriesInput
  }

  export type ProductCategoriesUncheckedCreateWithoutCategoriesInput = {
    productId: string
  }

  export type ProductCategoriesCreateOrConnectWithoutCategoriesInput = {
    where: ProductCategoriesWhereUniqueInput
    create: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCategoriesCreateManyCategoriesInputEnvelope = {
    data: ProductCategoriesCreateManyCategoriesInput | ProductCategoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CategoriesCreateWithoutParentInput = {
    id?: string | $Types.Skip
    name: string
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    productCategories?: ProductCategoriesCreateNestedManyWithoutCategoriesInput | $Types.Skip
    Categories?: CategoriesCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CategoriesUncheckedCreateWithoutParentInput = {
    id?: string | $Types.Skip
    name: string
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    productCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutCategoriesInput | $Types.Skip
    Categories?: CategoriesUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CategoriesCreateOrConnectWithoutParentInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput>
  }

  export type CategoriesCreateManyParentInputEnvelope = {
    data: CategoriesCreateManyParentInput | CategoriesCreateManyParentInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CategoriesUpsertWithoutCategoriesInput = {
    update: XOR<CategoriesUpdateWithoutCategoriesInput, CategoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<CategoriesCreateWithoutCategoriesInput, CategoriesUncheckedCreateWithoutCategoriesInput>
    where?: CategoriesWhereInput | $Types.Skip
  }

  export type CategoriesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: CategoriesWhereInput | $Types.Skip
    data: XOR<CategoriesUpdateWithoutCategoriesInput, CategoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoriesUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    parent?: CategoriesUpdateOneWithoutCategoriesNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUpdateManyWithoutCategoriesNestedInput | $Types.Skip
  }

  export type CategoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    productCategories?: ProductCategoriesUncheckedUpdateManyWithoutCategoriesNestedInput | $Types.Skip
  }

  export type ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProductCategoriesWhereUniqueInput
    update: XOR<ProductCategoriesUpdateWithoutCategoriesInput, ProductCategoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProductCategoriesWhereUniqueInput
    data: XOR<ProductCategoriesUpdateWithoutCategoriesInput, ProductCategoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProductCategoriesScalarWhereInput
    data: XOR<ProductCategoriesUpdateManyMutationInput, ProductCategoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type CategoriesUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoriesWhereUniqueInput
    update: XOR<CategoriesUpdateWithoutParentInput, CategoriesUncheckedUpdateWithoutParentInput>
    create: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput>
  }

  export type CategoriesUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoriesWhereUniqueInput
    data: XOR<CategoriesUpdateWithoutParentInput, CategoriesUncheckedUpdateWithoutParentInput>
  }

  export type CategoriesUpdateManyWithWhereWithoutParentInput = {
    where: CategoriesScalarWhereInput
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoriesScalarWhereInput = {
    AND?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[] | $Types.Skip
    OR?: CategoriesScalarWhereInput[] | $Types.Skip
    NOT?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Categories"> | string | $Types.Skip
    name?: StringFilter<"Categories"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Categories"> | string | null | $Types.Skip
    active?: BoolFilter<"Categories"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Categories"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Categories"> | Date | string | $Types.Skip
  }

  export type ProductsCreateWithoutProductCategoriesInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand: BrandsCreateNestedOneWithoutProductsInput
    variants?: VariantsCreateNestedManyWithoutProductInput | $Types.Skip
    likes?: LikesCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsUncheckedCreateWithoutProductCategoriesInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id: string
    variants?: VariantsUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    likes?: LikesUncheckedCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsCreateOrConnectWithoutProductCategoriesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductCategoriesInput, ProductsUncheckedCreateWithoutProductCategoriesInput>
  }

  export type CategoriesCreateWithoutProductCategoriesInput = {
    id?: string | $Types.Skip
    name: string
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    parent?: CategoriesCreateNestedOneWithoutCategoriesInput | $Types.Skip
    Categories?: CategoriesCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CategoriesUncheckedCreateWithoutProductCategoriesInput = {
    id?: string | $Types.Skip
    name: string
    parentId?: string | null | $Types.Skip
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    Categories?: CategoriesUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
  }

  export type CategoriesCreateOrConnectWithoutProductCategoriesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductCategoriesInput, CategoriesUncheckedCreateWithoutProductCategoriesInput>
  }

  export type ProductsUpsertWithoutProductCategoriesInput = {
    update: XOR<ProductsUpdateWithoutProductCategoriesInput, ProductsUncheckedUpdateWithoutProductCategoriesInput>
    create: XOR<ProductsCreateWithoutProductCategoriesInput, ProductsUncheckedCreateWithoutProductCategoriesInput>
    where?: ProductsWhereInput | $Types.Skip
  }

  export type ProductsUpdateToOneWithWhereWithoutProductCategoriesInput = {
    where?: ProductsWhereInput | $Types.Skip
    data: XOR<ProductsUpdateWithoutProductCategoriesInput, ProductsUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type ProductsUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput | $Types.Skip
    variants?: VariantsUpdateManyWithoutProductNestedInput | $Types.Skip
    likes?: LikesUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type ProductsUncheckedUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    variants?: VariantsUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    likes?: LikesUncheckedUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type CategoriesUpsertWithoutProductCategoriesInput = {
    update: XOR<CategoriesUpdateWithoutProductCategoriesInput, CategoriesUncheckedUpdateWithoutProductCategoriesInput>
    create: XOR<CategoriesCreateWithoutProductCategoriesInput, CategoriesUncheckedCreateWithoutProductCategoriesInput>
    where?: CategoriesWhereInput | $Types.Skip
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductCategoriesInput = {
    where?: CategoriesWhereInput | $Types.Skip
    data: XOR<CategoriesUpdateWithoutProductCategoriesInput, CategoriesUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type CategoriesUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    parent?: CategoriesUpdateOneWithoutCategoriesNestedInput | $Types.Skip
    Categories?: CategoriesUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CategoriesUncheckedUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Categories?: CategoriesUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type ProductsCreateWithoutLikesInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand: BrandsCreateNestedOneWithoutProductsInput
    variants?: VariantsCreateNestedManyWithoutProductInput | $Types.Skip
    productCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsUncheckedCreateWithoutLikesInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
    brand_id: string
    variants?: VariantsUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    productCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput | $Types.Skip
  }

  export type ProductsCreateOrConnectWithoutLikesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutLikesInput, ProductsUncheckedCreateWithoutLikesInput>
  }

  export type UsersCreateWithoutLikesInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    roles?: UserRolesCreateNestedManyWithoutUsersInput | $Types.Skip
    orders?: OrdersCreateNestedManyWithoutUserInput | $Types.Skip
    carts?: CartsCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersUncheckedCreateWithoutLikesInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    roles?: UserRolesUncheckedCreateNestedManyWithoutUsersInput | $Types.Skip
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    carts?: CartsUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersCreateOrConnectWithoutLikesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
  }

  export type ProductsUpsertWithoutLikesInput = {
    update: XOR<ProductsUpdateWithoutLikesInput, ProductsUncheckedUpdateWithoutLikesInput>
    create: XOR<ProductsCreateWithoutLikesInput, ProductsUncheckedCreateWithoutLikesInput>
    where?: ProductsWhereInput | $Types.Skip
  }

  export type ProductsUpdateToOneWithWhereWithoutLikesInput = {
    where?: ProductsWhereInput | $Types.Skip
    data: XOR<ProductsUpdateWithoutLikesInput, ProductsUncheckedUpdateWithoutLikesInput>
  }

  export type ProductsUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput | $Types.Skip
    variants?: VariantsUpdateManyWithoutProductNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type ProductsUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    brand_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    variants?: VariantsUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type UsersUpsertWithoutLikesInput = {
    update: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    where?: UsersWhereInput | $Types.Skip
  }

  export type UsersUpdateToOneWithWhereWithoutLikesInput = {
    where?: UsersWhereInput | $Types.Skip
    data: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type UsersUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roles?: UserRolesUpdateManyWithoutUsersNestedInput | $Types.Skip
    orders?: OrdersUpdateManyWithoutUserNestedInput | $Types.Skip
    carts?: CartsUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UsersUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roles?: UserRolesUncheckedUpdateManyWithoutUsersNestedInput | $Types.Skip
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    carts?: CartsUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type VariantsCreateWithoutCartDetailsInput = {
    id?: string | $Types.Skip
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    product: ProductsCreateNestedOneWithoutVariantsInput
    file?: FilesCreateNestedOneWithoutVariantsInput | $Types.Skip
    orderDetails?: OrderDetailsCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsUncheckedCreateWithoutCartDetailsInput = {
    id?: string | $Types.Skip
    product_id: string
    file_id: string
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutVariantsInput | $Types.Skip
  }

  export type VariantsCreateOrConnectWithoutCartDetailsInput = {
    where: VariantsWhereUniqueInput
    create: XOR<VariantsCreateWithoutCartDetailsInput, VariantsUncheckedCreateWithoutCartDetailsInput>
  }

  export type CartsCreateWithoutCartDetailsInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UsersCreateNestedOneWithoutCartsInput
  }

  export type CartsUncheckedCreateWithoutCartDetailsInput = {
    id?: string | $Types.Skip
    user_id: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CartsCreateOrConnectWithoutCartDetailsInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutCartDetailsInput, CartsUncheckedCreateWithoutCartDetailsInput>
  }

  export type VariantsUpsertWithoutCartDetailsInput = {
    update: XOR<VariantsUpdateWithoutCartDetailsInput, VariantsUncheckedUpdateWithoutCartDetailsInput>
    create: XOR<VariantsCreateWithoutCartDetailsInput, VariantsUncheckedCreateWithoutCartDetailsInput>
    where?: VariantsWhereInput | $Types.Skip
  }

  export type VariantsUpdateToOneWithWhereWithoutCartDetailsInput = {
    where?: VariantsWhereInput | $Types.Skip
    data: XOR<VariantsUpdateWithoutCartDetailsInput, VariantsUncheckedUpdateWithoutCartDetailsInput>
  }

  export type VariantsUpdateWithoutCartDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    product?: ProductsUpdateOneRequiredWithoutVariantsNestedInput | $Types.Skip
    file?: FilesUpdateOneWithoutVariantsNestedInput | $Types.Skip
    orderDetails?: OrderDetailsUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type VariantsUncheckedUpdateWithoutCartDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    product_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type CartsUpsertWithoutCartDetailsInput = {
    update: XOR<CartsUpdateWithoutCartDetailsInput, CartsUncheckedUpdateWithoutCartDetailsInput>
    create: XOR<CartsCreateWithoutCartDetailsInput, CartsUncheckedCreateWithoutCartDetailsInput>
    where?: CartsWhereInput | $Types.Skip
  }

  export type CartsUpdateToOneWithWhereWithoutCartDetailsInput = {
    where?: CartsWhereInput | $Types.Skip
    data: XOR<CartsUpdateWithoutCartDetailsInput, CartsUncheckedUpdateWithoutCartDetailsInput>
  }

  export type CartsUpdateWithoutCartDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UsersUpdateOneRequiredWithoutCartsNestedInput | $Types.Skip
  }

  export type CartsUncheckedUpdateWithoutCartDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type UsersCreateWithoutCartsInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    roles?: UserRolesCreateNestedManyWithoutUsersInput | $Types.Skip
    orders?: OrdersCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikesCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersUncheckedCreateWithoutCartsInput = {
    id?: string | $Types.Skip
    nickname: string
    first_name: string
    last_name: string
    email: string
    password: string
    roles?: UserRolesUncheckedCreateNestedManyWithoutUsersInput | $Types.Skip
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UsersCreateOrConnectWithoutCartsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCartsInput, UsersUncheckedCreateWithoutCartsInput>
  }

  export type CartDetailsCreateWithoutCartInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variants: VariantsCreateNestedOneWithoutCartDetailsInput
  }

  export type CartDetailsUncheckedCreateWithoutCartInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variant_id: string
  }

  export type CartDetailsCreateOrConnectWithoutCartInput = {
    where: CartDetailsWhereUniqueInput
    create: XOR<CartDetailsCreateWithoutCartInput, CartDetailsUncheckedCreateWithoutCartInput>
  }

  export type CartDetailsCreateManyCartInputEnvelope = {
    data: CartDetailsCreateManyCartInput | CartDetailsCreateManyCartInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type UsersUpsertWithoutCartsInput = {
    update: XOR<UsersUpdateWithoutCartsInput, UsersUncheckedUpdateWithoutCartsInput>
    create: XOR<UsersCreateWithoutCartsInput, UsersUncheckedCreateWithoutCartsInput>
    where?: UsersWhereInput | $Types.Skip
  }

  export type UsersUpdateToOneWithWhereWithoutCartsInput = {
    where?: UsersWhereInput | $Types.Skip
    data: XOR<UsersUpdateWithoutCartsInput, UsersUncheckedUpdateWithoutCartsInput>
  }

  export type UsersUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roles?: UserRolesUpdateManyWithoutUsersNestedInput | $Types.Skip
    orders?: OrdersUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikesUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UsersUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nickname?: StringFieldUpdateOperationsInput | string | $Types.Skip
    first_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    last_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    roles?: UserRolesUncheckedUpdateManyWithoutUsersNestedInput | $Types.Skip
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type CartDetailsUpsertWithWhereUniqueWithoutCartInput = {
    where: CartDetailsWhereUniqueInput
    update: XOR<CartDetailsUpdateWithoutCartInput, CartDetailsUncheckedUpdateWithoutCartInput>
    create: XOR<CartDetailsCreateWithoutCartInput, CartDetailsUncheckedCreateWithoutCartInput>
  }

  export type CartDetailsUpdateWithWhereUniqueWithoutCartInput = {
    where: CartDetailsWhereUniqueInput
    data: XOR<CartDetailsUpdateWithoutCartInput, CartDetailsUncheckedUpdateWithoutCartInput>
  }

  export type CartDetailsUpdateManyWithWhereWithoutCartInput = {
    where: CartDetailsScalarWhereInput
    data: XOR<CartDetailsUpdateManyMutationInput, CartDetailsUncheckedUpdateManyWithoutCartInput>
  }

  export type UserRolesCreateManyRolesInput = {
    userId: string
  }

  export type UserRolesUpdateWithoutRolesInput = {
    users?: UsersUpdateOneRequiredWithoutRolesNestedInput | $Types.Skip
  }

  export type UserRolesUncheckedUpdateWithoutRolesInput = {
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserRolesUncheckedUpdateManyWithoutRolesInput = {
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserRolesCreateManyUsersInput = {
    roleId: string
  }

  export type OrdersCreateManyUserInput = {
    id?: string | $Types.Skip
    created_at?: Date | string | $Types.Skip
  }

  export type LikesCreateManyUserInput = {
    productId: string
  }

  export type CartsCreateManyUserInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type UserRolesUpdateWithoutUsersInput = {
    roles?: RolesUpdateOneRequiredWithoutUsersNestedInput | $Types.Skip
  }

  export type UserRolesUncheckedUpdateWithoutUsersInput = {
    roleId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserRolesUncheckedUpdateManyWithoutUsersInput = {
    roleId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrdersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderDetails?: OrderDetailsUpdateManyWithoutOrderDetailsNestedInput | $Types.Skip
    payment?: PaymentsUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderDetailsNestedInput | $Types.Skip
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type LikesUpdateWithoutUserInput = {
    products?: ProductsUpdateOneRequiredWithoutLikesNestedInput | $Types.Skip
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    productId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    productId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CartsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    cartDetails?: CartDetailsUpdateManyWithoutCartNestedInput | $Types.Skip
  }

  export type CartsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    cartDetails?: CartDetailsUncheckedUpdateManyWithoutCartNestedInput | $Types.Skip
  }

  export type CartsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderDetailsCreateManyOrderDetailsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variant_id: string
  }

  export type OrderDetailsUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variants?: VariantsUpdateOneRequiredWithoutOrderDetailsNestedInput | $Types.Skip
  }

  export type OrderDetailsUncheckedUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variant_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variant_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type VariantsCreateManyProductInput = {
    id?: string | $Types.Skip
    file_id: string
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProductCategoriesCreateManyProductsInput = {
    categoryId: string
  }

  export type LikesCreateManyProductsInput = {
    user_id: string
  }

  export type VariantsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    file?: FilesUpdateOneWithoutVariantsNestedInput | $Types.Skip
    orderDetails?: OrderDetailsUpdateManyWithoutVariantsNestedInput | $Types.Skip
    cartDetails?: CartDetailsUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type VariantsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutVariantsNestedInput | $Types.Skip
    cartDetails?: CartDetailsUncheckedUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type VariantsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    file_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProductCategoriesUpdateWithoutProductsInput = {
    categories?: CategoriesUpdateOneRequiredWithoutProductCategoriesNestedInput | $Types.Skip
  }

  export type ProductCategoriesUncheckedUpdateWithoutProductsInput = {
    categoryId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type ProductCategoriesUncheckedUpdateManyWithoutProductsInput = {
    categoryId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type LikesUpdateWithoutProductsInput = {
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput | $Types.Skip
  }

  export type LikesUncheckedUpdateWithoutProductsInput = {
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type LikesUncheckedUpdateManyWithoutProductsInput = {
    user_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type ProductsCreateManyBrandInput = {
    id?: string | $Types.Skip
    name: string
    price: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    active?: boolean | $Types.Skip
  }

  export type ProductsUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    variants?: VariantsUpdateManyWithoutProductNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput | $Types.Skip
    likes?: LikesUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type ProductsUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    variants?: VariantsUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    productCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput | $Types.Skip
    likes?: LikesUncheckedUpdateManyWithoutProductsNestedInput | $Types.Skip
  }

  export type ProductsUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type OrderDetailsCreateManyVariantsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    orderDetails_id: string
  }

  export type CartDetailsCreateManyVariantsInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    cart_id: string
  }

  export type OrderDetailsUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    orderDetails?: OrdersUpdateOneRequiredWithoutOrderDetailsNestedInput | $Types.Skip
  }

  export type OrderDetailsUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    orderDetails_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrderDetailsUncheckedUpdateManyWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    orderDetails_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CartDetailsUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    cart?: CartsUpdateOneRequiredWithoutCartDetailsNestedInput | $Types.Skip
  }

  export type CartDetailsUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    cart_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CartDetailsUncheckedUpdateManyWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    cart_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type VariantsCreateManyFileInput = {
    id?: string | $Types.Skip
    product_id: string
    size?: $Enums.Size | $Types.Skip
    textColor?: $Enums.TextColor | $Types.Skip
    rgb: string
    stock: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type VariantsUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    product?: ProductsUpdateOneRequiredWithoutVariantsNestedInput | $Types.Skip
    orderDetails?: OrderDetailsUpdateManyWithoutVariantsNestedInput | $Types.Skip
    cartDetails?: CartDetailsUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type VariantsUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    product_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutVariantsNestedInput | $Types.Skip
    cartDetails?: CartDetailsUncheckedUpdateManyWithoutVariantsNestedInput | $Types.Skip
  }

  export type VariantsUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    product_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    size?: EnumSizeFieldUpdateOperationsInput | $Enums.Size | $Types.Skip
    textColor?: EnumTextColorFieldUpdateOperationsInput | $Enums.TextColor | $Types.Skip
    rgb?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stock?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProductCategoriesCreateManyCategoriesInput = {
    productId: string
  }

  export type CategoriesCreateManyParentInput = {
    id?: string | $Types.Skip
    name: string
    active: boolean
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProductCategoriesUpdateWithoutCategoriesInput = {
    products?: ProductsUpdateOneRequiredWithoutProductCategoriesNestedInput | $Types.Skip
  }

  export type ProductCategoriesUncheckedUpdateWithoutCategoriesInput = {
    productId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type ProductCategoriesUncheckedUpdateManyWithoutCategoriesInput = {
    productId?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CategoriesUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    productCategories?: ProductCategoriesUpdateManyWithoutCategoriesNestedInput | $Types.Skip
    Categories?: CategoriesUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CategoriesUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    productCategories?: ProductCategoriesUncheckedUpdateManyWithoutCategoriesNestedInput | $Types.Skip
    Categories?: CategoriesUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
  }

  export type CategoriesUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    active?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CartDetailsCreateManyCartInput = {
    id?: string | $Types.Skip
    quantity: number
    price: number
    variant_id: string
  }

  export type CartDetailsUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variants?: VariantsUpdateOneRequiredWithoutCartDetailsNestedInput | $Types.Skip
  }

  export type CartDetailsUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variant_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CartDetailsUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: FloatFieldUpdateOperationsInput | number | $Types.Skip
    variant_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}