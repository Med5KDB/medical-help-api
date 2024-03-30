
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
 * Model FormField
 * 
 */
export type FormField = $Result.DefaultSelection<Prisma.$FormFieldPayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model MedicalAssistant
 * 
 */
export type MedicalAssistant = $Result.DefaultSelection<Prisma.$MedicalAssistantPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MaritalStatus: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const ValueType: {
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE'
};

export type ValueType = (typeof ValueType)[keyof typeof ValueType]

}

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type ValueType = $Enums.ValueType

export const ValueType: typeof $Enums.ValueType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Doctors
 * const doctors = await prisma.doctor.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Doctors
   * const doctors = await prisma.doctor.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs>;

  /**
   * `prisma.medicalAssistant`: Exposes CRUD operations for the **MedicalAssistant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalAssistants
    * const medicalAssistants = await prisma.medicalAssistant.findMany()
    * ```
    */
  get medicalAssistant(): Prisma.MedicalAssistantDelegate<ExtArgs>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Doctor: 'Doctor',
    Patient: 'Patient',
    MedicalAssistant: 'MedicalAssistant',
    Hospital: 'Hospital',
    Medicine: 'Medicine'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'doctor' | 'patient' | 'medicalAssistant' | 'hospital' | 'medicine'
      txIsolationLevel: never
    },
    model: {
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DoctorFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DoctorAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>,
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PatientFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PatientAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>,
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      MedicalAssistant: {
        payload: Prisma.$MedicalAssistantPayload<ExtArgs>
        fields: Prisma.MedicalAssistantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalAssistantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalAssistantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload>
          }
          findFirst: {
            args: Prisma.MedicalAssistantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalAssistantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload>
          }
          findMany: {
            args: Prisma.MedicalAssistantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload>[]
          }
          create: {
            args: Prisma.MedicalAssistantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload>
          }
          createMany: {
            args: Prisma.MedicalAssistantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MedicalAssistantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload>
          }
          update: {
            args: Prisma.MedicalAssistantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload>
          }
          deleteMany: {
            args: Prisma.MedicalAssistantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalAssistantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MedicalAssistantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicalAssistantPayload>
          }
          aggregate: {
            args: Prisma.MedicalAssistantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMedicalAssistant>
          }
          groupBy: {
            args: Prisma.MedicalAssistantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MedicalAssistantGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MedicalAssistantFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MedicalAssistantAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MedicalAssistantCountArgs<ExtArgs>,
            result: $Utils.Optional<MedicalAssistantCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HospitalFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.HospitalAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>,
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MedicineFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MedicineAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>,
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    }
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
    | 'update'
    | 'updateMany'
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
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    medicalAssistant: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalAssistant?: boolean | DoctorCountOutputTypeCountMedicalAssistantArgs
  }

  // Custom InputTypes

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountMedicalAssistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalAssistantWhereInput
  }



  /**
   * Models
   */

  /**
   * Model FormField
   */





  export type FormFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    category?: boolean
    valueType?: boolean
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    category?: boolean
    valueType?: boolean
  }


  export type $FormFieldPayload = {
    name: "FormField"
    objects: {}
    scalars: {
      id: string
      name: string
      value: string
      category: string
      valueType: $Enums.ValueType
    }
    composites: {}
  }


  type FormFieldGetPayload<S extends boolean | null | undefined | FormFieldDefaultArgs> = $Result.GetResult<Prisma.$FormFieldPayload, S>





  /**
   * Fields of the FormField model
   */ 
  interface FormFieldFieldRefs {
    readonly id: FieldRef<"FormField", 'String'>
    readonly name: FieldRef<"FormField", 'String'>
    readonly value: FieldRef<"FormField", 'String'>
    readonly category: FieldRef<"FormField", 'String'>
    readonly valueType: FieldRef<"FormField", 'ValueType'>
  }
    

  // Custom InputTypes

  /**
   * FormField without action
   */
  export type FormFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
  }



  /**
   * Model MedicalRecord
   */





  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formField?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectScalar = {
    id?: boolean
  }

  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $MedicalRecordPayload = {
    name: "MedicalRecord"
    objects: {}
    scalars: {
      id: string
    }
    composites: {
      formField: Prisma.$FormFieldPayload
    }
  }


  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>





  /**
   * Fields of the MedicalRecord model
   */ 
  interface MedicalRecordFieldRefs {
    readonly id: FieldRef<"MedicalRecord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalRecordInclude<ExtArgs> | null
  }



  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    password: string | null
    email: string | null
    phoneNumber: string | null
    speciality: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    password: string | null
    email: string | null
    phoneNumber: string | null
    speciality: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    username: number
    password: number
    email: number
    phoneNumber: number
    speciality: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    email?: true
    phoneNumber?: true
    speciality?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    email?: true
    phoneNumber?: true
    speciality?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    email?: true
    phoneNumber?: true
    speciality?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    username: string
    password: string
    email: string | null
    phoneNumber: string | null
    speciality: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    phoneNumber?: boolean
    speciality?: boolean
    medicalAssistant?: boolean | Doctor$medicalAssistantArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    phoneNumber?: boolean
    speciality?: boolean
  }

  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalAssistant?: boolean | Doctor$medicalAssistantArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      medicalAssistant: Prisma.$MedicalAssistantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      username: string
      password: string
      email: string | null
      phoneNumber: string | null
      speciality: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }


  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoctorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Doctor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoctorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DoctorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
    **/
    create<T extends DoctorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Doctors.
     *     @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DoctorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
    **/
    delete<T extends DoctorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoctorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoctorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoctorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
    **/
    upsert<T extends DoctorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>
    ): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Doctors that matches the filter.
     * @param {DoctorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const doctor = await prisma.doctor.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DoctorFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Doctor.
     * @param {DoctorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const doctor = await prisma.doctor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DoctorAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    medicalAssistant<T extends Doctor$medicalAssistantArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$medicalAssistantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Doctor model
   */ 
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly firstname: FieldRef<"Doctor", 'String'>
    readonly lastname: FieldRef<"Doctor", 'String'>
    readonly username: FieldRef<"Doctor", 'String'>
    readonly password: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
    readonly phoneNumber: FieldRef<"Doctor", 'String'>
    readonly speciality: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }


  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }


  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }


  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }


  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
  }


  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
  }


  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }


  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
  }


  /**
   * Doctor findRaw
   */
  export type DoctorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Doctor aggregateRaw
   */
  export type DoctorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Doctor.medicalAssistant
   */
  export type Doctor$medicalAssistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    where?: MedicalAssistantWhereInput
    orderBy?: MedicalAssistantOrderByWithRelationInput | MedicalAssistantOrderByWithRelationInput[]
    cursor?: MedicalAssistantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalAssistantScalarFieldEnum | MedicalAssistantScalarFieldEnum[]
  }


  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude<ExtArgs> | null
  }



  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    birthDate: Date | null
    maritalStatus: $Enums.MaritalStatus | null
    occupation: string | null
    address: string | null
    phoneNumber: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    birthDate: Date | null
    maritalStatus: $Enums.MaritalStatus | null
    occupation: string | null
    address: string | null
    phoneNumber: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    birthDate: number
    maritalStatus: number
    occupation: number
    address: number
    phoneNumber: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    birthDate?: true
    maritalStatus?: true
    occupation?: true
    address?: true
    phoneNumber?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    birthDate?: true
    maritalStatus?: true
    occupation?: true
    address?: true
    phoneNumber?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    birthDate?: true
    maritalStatus?: true
    occupation?: true
    address?: true
    phoneNumber?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    birthDate: Date
    maritalStatus: $Enums.MaritalStatus
    occupation: string | null
    address: string
    phoneNumber: string
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    birthDate?: boolean
    maritalStatus?: boolean
    occupation?: boolean
    address?: boolean
    phoneNumber?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    birthDate?: boolean
    maritalStatus?: boolean
    occupation?: boolean
    address?: boolean
    phoneNumber?: boolean
  }

  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      birthDate: Date
      maritalStatus: $Enums.MaritalStatus
      occupation: string | null
      address: string
      phoneNumber: string
    }, ExtArgs["result"]["patient"]>
    composites: {
      medicalRecord: Prisma.$MedicalRecordPayload | null
    }
  }


  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PatientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PatientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PatientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
    **/
    create<T extends PatientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientCreateArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Patients.
     *     @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PatientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
    **/
    delete<T extends PatientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PatientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PatientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PatientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
    **/
    upsert<T extends PatientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * @param {PatientFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const patient = await prisma.patient.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PatientFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Patient.
     * @param {PatientAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const patient = await prisma.patient.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PatientAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly firstname: FieldRef<"Patient", 'String'>
    readonly lastname: FieldRef<"Patient", 'String'>
    readonly birthDate: FieldRef<"Patient", 'DateTime'>
    readonly maritalStatus: FieldRef<"Patient", 'MaritalStatus'>
    readonly occupation: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly phoneNumber: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }


  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }


  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }


  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }


  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }


  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }


  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }


  /**
   * Patient findRaw
   */
  export type PatientFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Patient aggregateRaw
   */
  export type PatientAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude<ExtArgs> | null
  }



  /**
   * Model MedicalAssistant
   */

  export type AggregateMedicalAssistant = {
    _count: MedicalAssistantCountAggregateOutputType | null
    _min: MedicalAssistantMinAggregateOutputType | null
    _max: MedicalAssistantMaxAggregateOutputType | null
  }

  export type MedicalAssistantMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    password: string | null
    phoneNumber: string | null
    email: string | null
    doctorId: string | null
  }

  export type MedicalAssistantMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    password: string | null
    phoneNumber: string | null
    email: string | null
    doctorId: string | null
  }

  export type MedicalAssistantCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    username: number
    password: number
    phoneNumber: number
    email: number
    doctorId: number
    _all: number
  }


  export type MedicalAssistantMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    phoneNumber?: true
    email?: true
    doctorId?: true
  }

  export type MedicalAssistantMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    phoneNumber?: true
    email?: true
    doctorId?: true
  }

  export type MedicalAssistantCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    phoneNumber?: true
    email?: true
    doctorId?: true
    _all?: true
  }

  export type MedicalAssistantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalAssistant to aggregate.
     */
    where?: MedicalAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalAssistants to fetch.
     */
    orderBy?: MedicalAssistantOrderByWithRelationInput | MedicalAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalAssistants
    **/
    _count?: true | MedicalAssistantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalAssistantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalAssistantMaxAggregateInputType
  }

  export type GetMedicalAssistantAggregateType<T extends MedicalAssistantAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalAssistant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalAssistant[P]>
      : GetScalarType<T[P], AggregateMedicalAssistant[P]>
  }




  export type MedicalAssistantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalAssistantWhereInput
    orderBy?: MedicalAssistantOrderByWithAggregationInput | MedicalAssistantOrderByWithAggregationInput[]
    by: MedicalAssistantScalarFieldEnum[] | MedicalAssistantScalarFieldEnum
    having?: MedicalAssistantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalAssistantCountAggregateInputType | true
    _min?: MedicalAssistantMinAggregateInputType
    _max?: MedicalAssistantMaxAggregateInputType
  }

  export type MedicalAssistantGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    username: string
    password: string
    phoneNumber: string | null
    email: string | null
    doctorId: string
    _count: MedicalAssistantCountAggregateOutputType | null
    _min: MedicalAssistantMinAggregateOutputType | null
    _max: MedicalAssistantMaxAggregateOutputType | null
  }

  type GetMedicalAssistantGroupByPayload<T extends MedicalAssistantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalAssistantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalAssistantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalAssistantGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalAssistantGroupByOutputType[P]>
        }
      >
    >


  export type MedicalAssistantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    email?: boolean
    doctorId?: boolean
    Doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalAssistant"]>

  export type MedicalAssistantSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    email?: boolean
    doctorId?: boolean
  }

  export type MedicalAssistantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }


  export type $MedicalAssistantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalAssistant"
    objects: {
      Doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      username: string
      password: string
      phoneNumber: string | null
      email: string | null
      doctorId: string
    }, ExtArgs["result"]["medicalAssistant"]>
    composites: {}
  }


  type MedicalAssistantGetPayload<S extends boolean | null | undefined | MedicalAssistantDefaultArgs> = $Result.GetResult<Prisma.$MedicalAssistantPayload, S>

  type MedicalAssistantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicalAssistantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicalAssistantCountAggregateInputType | true
    }

  export interface MedicalAssistantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalAssistant'], meta: { name: 'MedicalAssistant' } }
    /**
     * Find zero or one MedicalAssistant that matches the filter.
     * @param {MedicalAssistantFindUniqueArgs} args - Arguments to find a MedicalAssistant
     * @example
     * // Get one MedicalAssistant
     * const medicalAssistant = await prisma.medicalAssistant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicalAssistantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalAssistantFindUniqueArgs<ExtArgs>>
    ): Prisma__MedicalAssistantClient<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MedicalAssistant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicalAssistantFindUniqueOrThrowArgs} args - Arguments to find a MedicalAssistant
     * @example
     * // Get one MedicalAssistant
     * const medicalAssistant = await prisma.medicalAssistant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicalAssistantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalAssistantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MedicalAssistantClient<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MedicalAssistant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAssistantFindFirstArgs} args - Arguments to find a MedicalAssistant
     * @example
     * // Get one MedicalAssistant
     * const medicalAssistant = await prisma.medicalAssistant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicalAssistantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalAssistantFindFirstArgs<ExtArgs>>
    ): Prisma__MedicalAssistantClient<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MedicalAssistant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAssistantFindFirstOrThrowArgs} args - Arguments to find a MedicalAssistant
     * @example
     * // Get one MedicalAssistant
     * const medicalAssistant = await prisma.medicalAssistant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicalAssistantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalAssistantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MedicalAssistantClient<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MedicalAssistants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAssistantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalAssistants
     * const medicalAssistants = await prisma.medicalAssistant.findMany()
     * 
     * // Get first 10 MedicalAssistants
     * const medicalAssistants = await prisma.medicalAssistant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalAssistantWithIdOnly = await prisma.medicalAssistant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MedicalAssistantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalAssistantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MedicalAssistant.
     * @param {MedicalAssistantCreateArgs} args - Arguments to create a MedicalAssistant.
     * @example
     * // Create one MedicalAssistant
     * const MedicalAssistant = await prisma.medicalAssistant.create({
     *   data: {
     *     // ... data to create a MedicalAssistant
     *   }
     * })
     * 
    **/
    create<T extends MedicalAssistantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalAssistantCreateArgs<ExtArgs>>
    ): Prisma__MedicalAssistantClient<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MedicalAssistants.
     *     @param {MedicalAssistantCreateManyArgs} args - Arguments to create many MedicalAssistants.
     *     @example
     *     // Create many MedicalAssistants
     *     const medicalAssistant = await prisma.medicalAssistant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicalAssistantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalAssistantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalAssistant.
     * @param {MedicalAssistantDeleteArgs} args - Arguments to delete one MedicalAssistant.
     * @example
     * // Delete one MedicalAssistant
     * const MedicalAssistant = await prisma.medicalAssistant.delete({
     *   where: {
     *     // ... filter to delete one MedicalAssistant
     *   }
     * })
     * 
    **/
    delete<T extends MedicalAssistantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalAssistantDeleteArgs<ExtArgs>>
    ): Prisma__MedicalAssistantClient<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MedicalAssistant.
     * @param {MedicalAssistantUpdateArgs} args - Arguments to update one MedicalAssistant.
     * @example
     * // Update one MedicalAssistant
     * const medicalAssistant = await prisma.medicalAssistant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicalAssistantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalAssistantUpdateArgs<ExtArgs>>
    ): Prisma__MedicalAssistantClient<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MedicalAssistants.
     * @param {MedicalAssistantDeleteManyArgs} args - Arguments to filter MedicalAssistants to delete.
     * @example
     * // Delete a few MedicalAssistants
     * const { count } = await prisma.medicalAssistant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicalAssistantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicalAssistantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalAssistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAssistantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalAssistants
     * const medicalAssistant = await prisma.medicalAssistant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicalAssistantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalAssistantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalAssistant.
     * @param {MedicalAssistantUpsertArgs} args - Arguments to update or create a MedicalAssistant.
     * @example
     * // Update or create a MedicalAssistant
     * const medicalAssistant = await prisma.medicalAssistant.upsert({
     *   create: {
     *     // ... data to create a MedicalAssistant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalAssistant we want to update
     *   }
     * })
    **/
    upsert<T extends MedicalAssistantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MedicalAssistantUpsertArgs<ExtArgs>>
    ): Prisma__MedicalAssistantClient<$Result.GetResult<Prisma.$MedicalAssistantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more MedicalAssistants that matches the filter.
     * @param {MedicalAssistantFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const medicalAssistant = await prisma.medicalAssistant.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MedicalAssistantFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MedicalAssistant.
     * @param {MedicalAssistantAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const medicalAssistant = await prisma.medicalAssistant.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MedicalAssistantAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of MedicalAssistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAssistantCountArgs} args - Arguments to filter MedicalAssistants to count.
     * @example
     * // Count the number of MedicalAssistants
     * const count = await prisma.medicalAssistant.count({
     *   where: {
     *     // ... the filter for the MedicalAssistants we want to count
     *   }
     * })
    **/
    count<T extends MedicalAssistantCountArgs>(
      args?: Subset<T, MedicalAssistantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalAssistantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalAssistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAssistantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalAssistantAggregateArgs>(args: Subset<T, MedicalAssistantAggregateArgs>): Prisma.PrismaPromise<GetMedicalAssistantAggregateType<T>>

    /**
     * Group by MedicalAssistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAssistantGroupByArgs} args - Group by arguments.
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
      T extends MedicalAssistantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalAssistantGroupByArgs['orderBy'] }
        : { orderBy?: MedicalAssistantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalAssistantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalAssistantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalAssistant model
   */
  readonly fields: MedicalAssistantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalAssistant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalAssistantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MedicalAssistant model
   */ 
  interface MedicalAssistantFieldRefs {
    readonly id: FieldRef<"MedicalAssistant", 'String'>
    readonly firstname: FieldRef<"MedicalAssistant", 'String'>
    readonly lastname: FieldRef<"MedicalAssistant", 'String'>
    readonly username: FieldRef<"MedicalAssistant", 'String'>
    readonly password: FieldRef<"MedicalAssistant", 'String'>
    readonly phoneNumber: FieldRef<"MedicalAssistant", 'String'>
    readonly email: FieldRef<"MedicalAssistant", 'String'>
    readonly doctorId: FieldRef<"MedicalAssistant", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MedicalAssistant findUnique
   */
  export type MedicalAssistantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * Filter, which MedicalAssistant to fetch.
     */
    where: MedicalAssistantWhereUniqueInput
  }


  /**
   * MedicalAssistant findUniqueOrThrow
   */
  export type MedicalAssistantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * Filter, which MedicalAssistant to fetch.
     */
    where: MedicalAssistantWhereUniqueInput
  }


  /**
   * MedicalAssistant findFirst
   */
  export type MedicalAssistantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * Filter, which MedicalAssistant to fetch.
     */
    where?: MedicalAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalAssistants to fetch.
     */
    orderBy?: MedicalAssistantOrderByWithRelationInput | MedicalAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalAssistants.
     */
    cursor?: MedicalAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalAssistants.
     */
    distinct?: MedicalAssistantScalarFieldEnum | MedicalAssistantScalarFieldEnum[]
  }


  /**
   * MedicalAssistant findFirstOrThrow
   */
  export type MedicalAssistantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * Filter, which MedicalAssistant to fetch.
     */
    where?: MedicalAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalAssistants to fetch.
     */
    orderBy?: MedicalAssistantOrderByWithRelationInput | MedicalAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalAssistants.
     */
    cursor?: MedicalAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalAssistants.
     */
    distinct?: MedicalAssistantScalarFieldEnum | MedicalAssistantScalarFieldEnum[]
  }


  /**
   * MedicalAssistant findMany
   */
  export type MedicalAssistantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * Filter, which MedicalAssistants to fetch.
     */
    where?: MedicalAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalAssistants to fetch.
     */
    orderBy?: MedicalAssistantOrderByWithRelationInput | MedicalAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalAssistants.
     */
    cursor?: MedicalAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalAssistants.
     */
    skip?: number
    distinct?: MedicalAssistantScalarFieldEnum | MedicalAssistantScalarFieldEnum[]
  }


  /**
   * MedicalAssistant create
   */
  export type MedicalAssistantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalAssistant.
     */
    data: XOR<MedicalAssistantCreateInput, MedicalAssistantUncheckedCreateInput>
  }


  /**
   * MedicalAssistant createMany
   */
  export type MedicalAssistantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalAssistants.
     */
    data: MedicalAssistantCreateManyInput | MedicalAssistantCreateManyInput[]
  }


  /**
   * MedicalAssistant update
   */
  export type MedicalAssistantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalAssistant.
     */
    data: XOR<MedicalAssistantUpdateInput, MedicalAssistantUncheckedUpdateInput>
    /**
     * Choose, which MedicalAssistant to update.
     */
    where: MedicalAssistantWhereUniqueInput
  }


  /**
   * MedicalAssistant updateMany
   */
  export type MedicalAssistantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalAssistants.
     */
    data: XOR<MedicalAssistantUpdateManyMutationInput, MedicalAssistantUncheckedUpdateManyInput>
    /**
     * Filter which MedicalAssistants to update
     */
    where?: MedicalAssistantWhereInput
  }


  /**
   * MedicalAssistant upsert
   */
  export type MedicalAssistantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalAssistant to update in case it exists.
     */
    where: MedicalAssistantWhereUniqueInput
    /**
     * In case the MedicalAssistant found by the `where` argument doesn't exist, create a new MedicalAssistant with this data.
     */
    create: XOR<MedicalAssistantCreateInput, MedicalAssistantUncheckedCreateInput>
    /**
     * In case the MedicalAssistant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalAssistantUpdateInput, MedicalAssistantUncheckedUpdateInput>
  }


  /**
   * MedicalAssistant delete
   */
  export type MedicalAssistantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
    /**
     * Filter which MedicalAssistant to delete.
     */
    where: MedicalAssistantWhereUniqueInput
  }


  /**
   * MedicalAssistant deleteMany
   */
  export type MedicalAssistantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalAssistants to delete
     */
    where?: MedicalAssistantWhereInput
  }


  /**
   * MedicalAssistant findRaw
   */
  export type MedicalAssistantFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MedicalAssistant aggregateRaw
   */
  export type MedicalAssistantAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MedicalAssistant without action
   */
  export type MedicalAssistantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalAssistant
     */
    select?: MedicalAssistantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MedicalAssistantInclude<ExtArgs> | null
  }



  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phoneNumber: number
    _all: number
  }


  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: string
    name: string
    address: string
    phoneNumber: string
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
  }


  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phoneNumber: string
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }


  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HospitalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hospital that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HospitalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HospitalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
    **/
    create<T extends HospitalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hospitals.
     *     @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     *     @example
     *     // Create many Hospitals
     *     const hospital = await prisma.hospital.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HospitalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
    **/
    delete<T extends HospitalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HospitalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HospitalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HospitalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
    **/
    upsert<T extends HospitalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Hospitals that matches the filter.
     * @param {HospitalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hospital = await prisma.hospital.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: HospitalFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Hospital.
     * @param {HospitalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hospital = await prisma.hospital.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: HospitalAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
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
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Hospital model
   */ 
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'String'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly address: FieldRef<"Hospital", 'String'>
    readonly phoneNumber: FieldRef<"Hospital", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }


  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }


  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }


  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }


  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
  }


  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
  }


  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }


  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
  }


  /**
   * Hospital findRaw
   */
  export type HospitalFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Hospital aggregateRaw
   */
  export type HospitalAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
  }



  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type MedicineMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: MedicineCountAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }


  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }


  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>
    ): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Medicine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>
    ): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MedicineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
    **/
    create<T extends MedicineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>
    ): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Medicines.
     *     @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     *     @example
     *     // Create many Medicines
     *     const medicine = await prisma.medicine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
    **/
    delete<T extends MedicineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>
    ): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>
    ): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
    **/
    upsert<T extends MedicineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>
    ): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Medicines that matches the filter.
     * @param {MedicineFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const medicine = await prisma.medicine.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MedicineFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Medicine.
     * @param {MedicineAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const medicine = await prisma.medicine.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MedicineAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
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
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Medicine model
   */ 
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'String'>
    readonly name: FieldRef<"Medicine", 'String'>
    readonly description: FieldRef<"Medicine", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }


  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }


  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }


  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }


  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
  }


  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
  }


  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }


  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
  }


  /**
   * Medicine findRaw
   */
  export type MedicineFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Medicine aggregateRaw
   */
  export type MedicineAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const DoctorScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    password: 'password',
    email: 'email',
    phoneNumber: 'phoneNumber',
    speciality: 'speciality'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    birthDate: 'birthDate',
    maritalStatus: 'maritalStatus',
    occupation: 'occupation',
    address: 'address',
    phoneNumber: 'phoneNumber'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const MedicalAssistantScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    password: 'password',
    phoneNumber: 'phoneNumber',
    email: 'email',
    doctorId: 'doctorId'
  };

  export type MedicalAssistantScalarFieldEnum = (typeof MedicalAssistantScalarFieldEnum)[keyof typeof MedicalAssistantScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phoneNumber: 'phoneNumber'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


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
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ValueType'
   */
  export type EnumValueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ValueType'>
    


  /**
   * Reference to a field of type 'ValueType[]'
   */
  export type ListEnumValueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ValueType[]'>
    
  /**
   * Deep Input Types
   */


  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    firstname?: StringFilter<"Doctor"> | string
    lastname?: StringFilter<"Doctor"> | string
    username?: StringFilter<"Doctor"> | string
    password?: StringFilter<"Doctor"> | string
    email?: StringNullableFilter<"Doctor"> | string | null
    phoneNumber?: StringNullableFilter<"Doctor"> | string | null
    speciality?: StringFilter<"Doctor"> | string
    medicalAssistant?: MedicalAssistantListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    speciality?: SortOrder
    medicalAssistant?: MedicalAssistantOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    firstname?: StringFilter<"Doctor"> | string
    lastname?: StringFilter<"Doctor"> | string
    password?: StringFilter<"Doctor"> | string
    email?: StringNullableFilter<"Doctor"> | string | null
    phoneNumber?: StringNullableFilter<"Doctor"> | string | null
    speciality?: StringFilter<"Doctor"> | string
    medicalAssistant?: MedicalAssistantListRelationFilter
  }, "id" | "username">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    speciality?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    firstname?: StringWithAggregatesFilter<"Doctor"> | string
    lastname?: StringWithAggregatesFilter<"Doctor"> | string
    username?: StringWithAggregatesFilter<"Doctor"> | string
    password?: StringWithAggregatesFilter<"Doctor"> | string
    email?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    speciality?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    firstname?: StringFilter<"Patient"> | string
    lastname?: StringFilter<"Patient"> | string
    birthDate?: DateTimeFilter<"Patient"> | Date | string
    maritalStatus?: EnumMaritalStatusFilter<"Patient"> | $Enums.MaritalStatus
    occupation?: StringNullableFilter<"Patient"> | string | null
    address?: StringFilter<"Patient"> | string
    phoneNumber?: StringFilter<"Patient"> | string
    medicalRecord?: XOR<MedicalRecordNullableCompositeFilter, MedicalRecordObjectEqualityInput> | null
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    birthDate?: SortOrder
    maritalStatus?: SortOrder
    occupation?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    medicalRecord?: MedicalRecordOrderByInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    firstname?: StringFilter<"Patient"> | string
    lastname?: StringFilter<"Patient"> | string
    birthDate?: DateTimeFilter<"Patient"> | Date | string
    maritalStatus?: EnumMaritalStatusFilter<"Patient"> | $Enums.MaritalStatus
    occupation?: StringNullableFilter<"Patient"> | string | null
    address?: StringFilter<"Patient"> | string
    phoneNumber?: StringFilter<"Patient"> | string
    medicalRecord?: XOR<MedicalRecordNullableCompositeFilter, MedicalRecordObjectEqualityInput> | null
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    birthDate?: SortOrder
    maritalStatus?: SortOrder
    occupation?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    firstname?: StringWithAggregatesFilter<"Patient"> | string
    lastname?: StringWithAggregatesFilter<"Patient"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    maritalStatus?: EnumMaritalStatusWithAggregatesFilter<"Patient"> | $Enums.MaritalStatus
    occupation?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address?: StringWithAggregatesFilter<"Patient"> | string
    phoneNumber?: StringWithAggregatesFilter<"Patient"> | string
  }

  export type MedicalAssistantWhereInput = {
    AND?: MedicalAssistantWhereInput | MedicalAssistantWhereInput[]
    OR?: MedicalAssistantWhereInput[]
    NOT?: MedicalAssistantWhereInput | MedicalAssistantWhereInput[]
    id?: StringFilter<"MedicalAssistant"> | string
    firstname?: StringFilter<"MedicalAssistant"> | string
    lastname?: StringFilter<"MedicalAssistant"> | string
    username?: StringFilter<"MedicalAssistant"> | string
    password?: StringFilter<"MedicalAssistant"> | string
    phoneNumber?: StringNullableFilter<"MedicalAssistant"> | string | null
    email?: StringNullableFilter<"MedicalAssistant"> | string | null
    doctorId?: StringFilter<"MedicalAssistant"> | string
    Doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
  }

  export type MedicalAssistantOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    doctorId?: SortOrder
    Doctor?: DoctorOrderByWithRelationInput
  }

  export type MedicalAssistantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalAssistantWhereInput | MedicalAssistantWhereInput[]
    OR?: MedicalAssistantWhereInput[]
    NOT?: MedicalAssistantWhereInput | MedicalAssistantWhereInput[]
    firstname?: StringFilter<"MedicalAssistant"> | string
    lastname?: StringFilter<"MedicalAssistant"> | string
    username?: StringFilter<"MedicalAssistant"> | string
    password?: StringFilter<"MedicalAssistant"> | string
    phoneNumber?: StringNullableFilter<"MedicalAssistant"> | string | null
    email?: StringNullableFilter<"MedicalAssistant"> | string | null
    doctorId?: StringFilter<"MedicalAssistant"> | string
    Doctor?: XOR<DoctorRelationFilter, DoctorWhereInput>
  }, "id">

  export type MedicalAssistantOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    doctorId?: SortOrder
    _count?: MedicalAssistantCountOrderByAggregateInput
    _max?: MedicalAssistantMaxOrderByAggregateInput
    _min?: MedicalAssistantMinOrderByAggregateInput
  }

  export type MedicalAssistantScalarWhereWithAggregatesInput = {
    AND?: MedicalAssistantScalarWhereWithAggregatesInput | MedicalAssistantScalarWhereWithAggregatesInput[]
    OR?: MedicalAssistantScalarWhereWithAggregatesInput[]
    NOT?: MedicalAssistantScalarWhereWithAggregatesInput | MedicalAssistantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalAssistant"> | string
    firstname?: StringWithAggregatesFilter<"MedicalAssistant"> | string
    lastname?: StringWithAggregatesFilter<"MedicalAssistant"> | string
    username?: StringWithAggregatesFilter<"MedicalAssistant"> | string
    password?: StringWithAggregatesFilter<"MedicalAssistant"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"MedicalAssistant"> | string | null
    email?: StringNullableWithAggregatesFilter<"MedicalAssistant"> | string | null
    doctorId?: StringWithAggregatesFilter<"MedicalAssistant"> | string
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: StringFilter<"Hospital"> | string
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    phoneNumber?: StringFilter<"Hospital"> | string
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    phoneNumber?: StringFilter<"Hospital"> | string
  }, "id">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hospital"> | string
    name?: StringWithAggregatesFilter<"Hospital"> | string
    address?: StringWithAggregatesFilter<"Hospital"> | string
    phoneNumber?: StringWithAggregatesFilter<"Hospital"> | string
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: StringFilter<"Medicine"> | string
    name?: StringFilter<"Medicine"> | string
    description?: StringNullableFilter<"Medicine"> | string | null
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    name?: StringFilter<"Medicine"> | string
    description?: StringNullableFilter<"Medicine"> | string | null
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medicine"> | string
    name?: StringWithAggregatesFilter<"Medicine"> | string
    description?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
  }

  export type DoctorCreateInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    email?: string | null
    phoneNumber?: string | null
    speciality: string
    medicalAssistant?: MedicalAssistantCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    email?: string | null
    phoneNumber?: string | null
    speciality: string
    medicalAssistant?: MedicalAssistantUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: StringFieldUpdateOperationsInput | string
    medicalAssistant?: MedicalAssistantUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: StringFieldUpdateOperationsInput | string
    medicalAssistant?: MedicalAssistantUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    email?: string | null
    phoneNumber?: string | null
    speciality: string
  }

  export type DoctorUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    id?: string
    firstname: string
    lastname: string
    birthDate: Date | string
    maritalStatus: $Enums.MaritalStatus
    occupation?: string | null
    address: string
    phoneNumber: string
    medicalRecord?: XOR<MedicalRecordNullableCreateEnvelopeInput, MedicalRecordCreateInput> | null
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    birthDate: Date | string
    maritalStatus: $Enums.MaritalStatus
    occupation?: string | null
    address: string
    phoneNumber: string
    medicalRecord?: XOR<MedicalRecordNullableCreateEnvelopeInput, MedicalRecordCreateInput> | null
  }

  export type PatientUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    medicalRecord?: XOR<MedicalRecordNullableUpdateEnvelopeInput, MedicalRecordCreateInput> | null
  }

  export type PatientUncheckedUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    medicalRecord?: XOR<MedicalRecordNullableUpdateEnvelopeInput, MedicalRecordCreateInput> | null
  }

  export type PatientCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    birthDate: Date | string
    maritalStatus: $Enums.MaritalStatus
    occupation?: string | null
    address: string
    phoneNumber: string
    medicalRecord?: XOR<MedicalRecordNullableCreateEnvelopeInput, MedicalRecordCreateInput> | null
  }

  export type PatientUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    medicalRecord?: XOR<MedicalRecordNullableUpdateEnvelopeInput, MedicalRecordCreateInput> | null
  }

  export type PatientUncheckedUpdateManyInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    medicalRecord?: XOR<MedicalRecordNullableUpdateEnvelopeInput, MedicalRecordCreateInput> | null
  }

  export type MedicalAssistantCreateInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    phoneNumber?: string | null
    email?: string | null
    Doctor: DoctorCreateNestedOneWithoutMedicalAssistantInput
  }

  export type MedicalAssistantUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    phoneNumber?: string | null
    email?: string | null
    doctorId: string
  }

  export type MedicalAssistantUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Doctor?: DoctorUpdateOneRequiredWithoutMedicalAssistantNestedInput
  }

  export type MedicalAssistantUncheckedUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalAssistantCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    phoneNumber?: string | null
    email?: string | null
    doctorId: string
  }

  export type MedicalAssistantUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalAssistantUncheckedUpdateManyInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalCreateInput = {
    id?: string
    name: string
    address: string
    phoneNumber: string
  }

  export type HospitalUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phoneNumber: string
  }

  export type HospitalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalCreateManyInput = {
    id?: string
    name: string
    address: string
    phoneNumber: string
  }

  export type HospitalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineCreateInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type MedicineUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type MedicineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type MedicineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type MedicalAssistantListRelationFilter = {
    every?: MedicalAssistantWhereInput
    some?: MedicalAssistantWhereInput
    none?: MedicalAssistantWhereInput
  }

  export type MedicalAssistantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    speciality?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    speciality?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    speciality?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type MedicalRecordNullableCompositeFilter = {
    equals?: MedicalRecordObjectEqualityInput | null
    is?: MedicalRecordWhereInput | null
    isNot?: MedicalRecordWhereInput | null
    isSet?: boolean
  }

  export type MedicalRecordObjectEqualityInput = {
    id: string
    formField: FormFieldObjectEqualityInput
  }

  export type MedicalRecordOrderByInput = {
    id?: SortOrder
    formField?: FormFieldOrderByInput
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    birthDate?: SortOrder
    maritalStatus?: SortOrder
    occupation?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    birthDate?: SortOrder
    maritalStatus?: SortOrder
    occupation?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    birthDate?: SortOrder
    maritalStatus?: SortOrder
    occupation?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type DoctorRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type MedicalAssistantCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    doctorId?: SortOrder
  }

  export type MedicalAssistantMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    doctorId?: SortOrder
  }

  export type MedicalAssistantMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    doctorId?: SortOrder
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicalAssistantCreateNestedManyWithoutDoctorInput = {
    create?: XOR<MedicalAssistantCreateWithoutDoctorInput, MedicalAssistantUncheckedCreateWithoutDoctorInput> | MedicalAssistantCreateWithoutDoctorInput[] | MedicalAssistantUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalAssistantCreateOrConnectWithoutDoctorInput | MedicalAssistantCreateOrConnectWithoutDoctorInput[]
    createMany?: MedicalAssistantCreateManyDoctorInputEnvelope
    connect?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
  }

  export type MedicalAssistantUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<MedicalAssistantCreateWithoutDoctorInput, MedicalAssistantUncheckedCreateWithoutDoctorInput> | MedicalAssistantCreateWithoutDoctorInput[] | MedicalAssistantUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalAssistantCreateOrConnectWithoutDoctorInput | MedicalAssistantCreateOrConnectWithoutDoctorInput[]
    createMany?: MedicalAssistantCreateManyDoctorInputEnvelope
    connect?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type MedicalAssistantUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<MedicalAssistantCreateWithoutDoctorInput, MedicalAssistantUncheckedCreateWithoutDoctorInput> | MedicalAssistantCreateWithoutDoctorInput[] | MedicalAssistantUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalAssistantCreateOrConnectWithoutDoctorInput | MedicalAssistantCreateOrConnectWithoutDoctorInput[]
    upsert?: MedicalAssistantUpsertWithWhereUniqueWithoutDoctorInput | MedicalAssistantUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: MedicalAssistantCreateManyDoctorInputEnvelope
    set?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
    disconnect?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
    delete?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
    connect?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
    update?: MedicalAssistantUpdateWithWhereUniqueWithoutDoctorInput | MedicalAssistantUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: MedicalAssistantUpdateManyWithWhereWithoutDoctorInput | MedicalAssistantUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: MedicalAssistantScalarWhereInput | MedicalAssistantScalarWhereInput[]
  }

  export type MedicalAssistantUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<MedicalAssistantCreateWithoutDoctorInput, MedicalAssistantUncheckedCreateWithoutDoctorInput> | MedicalAssistantCreateWithoutDoctorInput[] | MedicalAssistantUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalAssistantCreateOrConnectWithoutDoctorInput | MedicalAssistantCreateOrConnectWithoutDoctorInput[]
    upsert?: MedicalAssistantUpsertWithWhereUniqueWithoutDoctorInput | MedicalAssistantUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: MedicalAssistantCreateManyDoctorInputEnvelope
    set?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
    disconnect?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
    delete?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
    connect?: MedicalAssistantWhereUniqueInput | MedicalAssistantWhereUniqueInput[]
    update?: MedicalAssistantUpdateWithWhereUniqueWithoutDoctorInput | MedicalAssistantUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: MedicalAssistantUpdateManyWithWhereWithoutDoctorInput | MedicalAssistantUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: MedicalAssistantScalarWhereInput | MedicalAssistantScalarWhereInput[]
  }

  export type MedicalRecordNullableCreateEnvelopeInput = {
    set?: MedicalRecordCreateInput | null
  }

  export type MedicalRecordCreateInput = {
    id: string
    formField: FormFieldCreateInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus
  }

  export type MedicalRecordNullableUpdateEnvelopeInput = {
    set?: MedicalRecordCreateInput | null
    upsert?: MedicalRecordUpsertInput
    unset?: boolean
  }

  export type DoctorCreateNestedOneWithoutMedicalAssistantInput = {
    create?: XOR<DoctorCreateWithoutMedicalAssistantInput, DoctorUncheckedCreateWithoutMedicalAssistantInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutMedicalAssistantInput
    connect?: DoctorWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutMedicalAssistantNestedInput = {
    create?: XOR<DoctorCreateWithoutMedicalAssistantInput, DoctorUncheckedCreateWithoutMedicalAssistantInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutMedicalAssistantInput
    upsert?: DoctorUpsertWithoutMedicalAssistantInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutMedicalAssistantInput, DoctorUpdateWithoutMedicalAssistantInput>, DoctorUncheckedUpdateWithoutMedicalAssistantInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    formField?: XOR<FormFieldCompositeFilter, FormFieldObjectEqualityInput>
  }

  export type FormFieldObjectEqualityInput = {
    id: string
    name: string
    value: string
    category: string
    valueType: $Enums.ValueType
  }

  export type FormFieldOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    category?: SortOrder
    valueType?: SortOrder
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type MedicalAssistantCreateWithoutDoctorInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    phoneNumber?: string | null
    email?: string | null
  }

  export type MedicalAssistantUncheckedCreateWithoutDoctorInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    phoneNumber?: string | null
    email?: string | null
  }

  export type MedicalAssistantCreateOrConnectWithoutDoctorInput = {
    where: MedicalAssistantWhereUniqueInput
    create: XOR<MedicalAssistantCreateWithoutDoctorInput, MedicalAssistantUncheckedCreateWithoutDoctorInput>
  }

  export type MedicalAssistantCreateManyDoctorInputEnvelope = {
    data: MedicalAssistantCreateManyDoctorInput | MedicalAssistantCreateManyDoctorInput[]
  }

  export type MedicalAssistantUpsertWithWhereUniqueWithoutDoctorInput = {
    where: MedicalAssistantWhereUniqueInput
    update: XOR<MedicalAssistantUpdateWithoutDoctorInput, MedicalAssistantUncheckedUpdateWithoutDoctorInput>
    create: XOR<MedicalAssistantCreateWithoutDoctorInput, MedicalAssistantUncheckedCreateWithoutDoctorInput>
  }

  export type MedicalAssistantUpdateWithWhereUniqueWithoutDoctorInput = {
    where: MedicalAssistantWhereUniqueInput
    data: XOR<MedicalAssistantUpdateWithoutDoctorInput, MedicalAssistantUncheckedUpdateWithoutDoctorInput>
  }

  export type MedicalAssistantUpdateManyWithWhereWithoutDoctorInput = {
    where: MedicalAssistantScalarWhereInput
    data: XOR<MedicalAssistantUpdateManyMutationInput, MedicalAssistantUncheckedUpdateManyWithoutDoctorInput>
  }

  export type MedicalAssistantScalarWhereInput = {
    AND?: MedicalAssistantScalarWhereInput | MedicalAssistantScalarWhereInput[]
    OR?: MedicalAssistantScalarWhereInput[]
    NOT?: MedicalAssistantScalarWhereInput | MedicalAssistantScalarWhereInput[]
    id?: StringFilter<"MedicalAssistant"> | string
    firstname?: StringFilter<"MedicalAssistant"> | string
    lastname?: StringFilter<"MedicalAssistant"> | string
    username?: StringFilter<"MedicalAssistant"> | string
    password?: StringFilter<"MedicalAssistant"> | string
    phoneNumber?: StringNullableFilter<"MedicalAssistant"> | string | null
    email?: StringNullableFilter<"MedicalAssistant"> | string | null
    doctorId?: StringFilter<"MedicalAssistant"> | string
  }

  export type FormFieldCreateInput = {
    id: string
    name: string
    value: string
    category: string
    valueType: $Enums.ValueType
  }

  export type MedicalRecordUpsertInput = {
    set: MedicalRecordCreateInput | null
    update: MedicalRecordUpdateInput
  }

  export type DoctorCreateWithoutMedicalAssistantInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    email?: string | null
    phoneNumber?: string | null
    speciality: string
  }

  export type DoctorUncheckedCreateWithoutMedicalAssistantInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    email?: string | null
    phoneNumber?: string | null
    speciality: string
  }

  export type DoctorCreateOrConnectWithoutMedicalAssistantInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutMedicalAssistantInput, DoctorUncheckedCreateWithoutMedicalAssistantInput>
  }

  export type DoctorUpsertWithoutMedicalAssistantInput = {
    update: XOR<DoctorUpdateWithoutMedicalAssistantInput, DoctorUncheckedUpdateWithoutMedicalAssistantInput>
    create: XOR<DoctorCreateWithoutMedicalAssistantInput, DoctorUncheckedCreateWithoutMedicalAssistantInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutMedicalAssistantInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutMedicalAssistantInput, DoctorUncheckedUpdateWithoutMedicalAssistantInput>
  }

  export type DoctorUpdateWithoutMedicalAssistantInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateWithoutMedicalAssistantInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    speciality?: StringFieldUpdateOperationsInput | string
  }

  export type FormFieldCompositeFilter = {
    equals?: FormFieldObjectEqualityInput
    is?: FormFieldWhereInput
    isNot?: FormFieldWhereInput
  }

  export type MedicalAssistantCreateManyDoctorInput = {
    id?: string
    firstname: string
    lastname: string
    username: string
    password: string
    phoneNumber?: string | null
    email?: string | null
  }

  export type MedicalAssistantUpdateWithoutDoctorInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalAssistantUncheckedUpdateWithoutDoctorInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalAssistantUncheckedUpdateManyWithoutDoctorInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formField?: XOR<FormFieldUpdateEnvelopeInput, FormFieldCreateInput>
  }

  export type FormFieldWhereInput = {
    AND?: FormFieldWhereInput | FormFieldWhereInput[]
    OR?: FormFieldWhereInput[]
    NOT?: FormFieldWhereInput | FormFieldWhereInput[]
    id?: StringFilter<"FormField"> | string
    name?: StringFilter<"FormField"> | string
    value?: StringFilter<"FormField"> | string
    category?: StringFilter<"FormField"> | string
    valueType?: EnumValueTypeFilter<"FormField"> | $Enums.ValueType
  }

  export type FormFieldUpdateEnvelopeInput = {
    set?: FormFieldCreateInput
    update?: FormFieldUpdateInput
  }

  export type EnumValueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ValueType | EnumValueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ValueType[] | ListEnumValueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValueType[] | ListEnumValueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumValueTypeFilter<$PrismaModel> | $Enums.ValueType
  }

  export type FormFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    valueType?: EnumValueTypeFieldUpdateOperationsInput | $Enums.ValueType
  }

  export type NestedEnumValueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ValueType | EnumValueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ValueType[] | ListEnumValueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValueType[] | ListEnumValueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumValueTypeFilter<$PrismaModel> | $Enums.ValueType
  }

  export type EnumValueTypeFieldUpdateOperationsInput = {
    set?: $Enums.ValueType
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DoctorCountOutputTypeDefaultArgs instead
     */
    export type DoctorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormFieldDefaultArgs instead
     */
    export type FormFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormFieldDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicalRecordDefaultArgs instead
     */
    export type MedicalRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicalRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DoctorDefaultArgs instead
     */
    export type DoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DoctorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientDefaultArgs instead
     */
    export type PatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicalAssistantDefaultArgs instead
     */
    export type MedicalAssistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicalAssistantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HospitalDefaultArgs instead
     */
    export type HospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HospitalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineDefaultArgs instead
     */
    export type MedicineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineDefaultArgs<ExtArgs>

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