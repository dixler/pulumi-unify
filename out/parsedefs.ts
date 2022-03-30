export type Shape = 
  | BlobTypeShape
  | BooleanTypeShape
  | IntegerTypeShape
  | ListTypeShape
  | LongTypeShape
  | MapTypeShape
  | StringTypeShape
  | StructTypeShape



export type BlobTypeShape = {
  type: "blob";
  sensitive?: boolean;
}
export type BooleanTypeShape = {
  type: "boolean";
}
export type IntegerTypeShape = {
  type: "integer";
}
export type ListTypeShape = {
  type: "list";
  member: {
      shape: ShapeRef;
  },
  flattened: boolean;
}
export type LongTypeShape = {
  type: "long";
}
export type MapTypeShape = {
  type: "map";
  key: {
    shape: ShapeRef;
  },
  value: {
    shape: ShapeRef;
  }
}
export type StringTypeShape = {
  type: "string";
  enum?: string[];
}
export type StructTypeShape = {
  type: "structure";
  required?: ShapeRef[];
  members: {
    [key: string]: {
      shape: ShapeRef;
    }
  }
}

export type TimestampTypeShape = {
  type: "timestamp";
  timestampFormat?: "iso8601" | "rfc822";
}

export type ShapeRef = string;

export type OperationRef = string;

export type Operation = {
  name: OperationRef;
  output?: {
    shape: ShapeRef;
  }
  input?: {
    shape: ShapeRef;
  }
}