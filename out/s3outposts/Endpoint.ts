
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateEndpointRequest,
    DeleteEndpointRequest,
    CreateEndpointResult
} from "aws-sdk/clients/s3outposts";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.s3outposts.Endpoint {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.s3outposts.Endpoint>) {
        super(...args)
        this.client = new awssdk.S3Outposts()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/s3outposts-2017-07-25.normal.json"), this.client)
    }

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointRequest & keyof CreateEndpointRequest & keyof CreateEndpointRequest & keyof CreateEndpointRequest & keyof CreateEndpointRequest & keyof CreateEndpointRequest]: (CreateEndpointRequest & CreateEndpointRequest & CreateEndpointRequest & CreateEndpointRequest & CreateEndpointRequest & CreateEndpointRequest)[K]
    }>): CreateEndpointResult {
        return this.client.createEndpoint(
            this.ops["CreateEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest]: (DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest)[K]
    }>): void {
        return this.client.deleteEndpoint(
            this.ops["DeleteEndpoint"].apply(partialParams)
        );
    }
}