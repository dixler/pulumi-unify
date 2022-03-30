
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CancelResourceRequestInput,
    CreateResourceInput,
    DeleteResourceInput,
    GetResourceInput,
    GetResourceRequestStatusInput,
    ListResourcesInput,
    UpdateResourceInput,
    CancelResourceRequestOutput,
    CreateResourceOutput,
    DeleteResourceOutput,
    GetResourceOutput,
    GetResourceRequestStatusOutput,
    ListResourcesOutput,
    UpdateResourceOutput
} from "aws-sdk/clients/cloudcontrol";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudcontrol.Resource {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cloudcontrol.Resource>) {
        super(...args)
        this.client = new awssdk.CloudControl()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cloudcontrol-2021-09-30.normal.json"), this.client)
    }

    invokeCancelResourceRequest(partialParams: ToOptional<{
      [K in keyof CancelResourceRequestInput & keyof CancelResourceRequestInput & keyof CancelResourceRequestInput & keyof CancelResourceRequestInput & keyof CancelResourceRequestInput & keyof CancelResourceRequestInput]: (CancelResourceRequestInput & CancelResourceRequestInput & CancelResourceRequestInput & CancelResourceRequestInput & CancelResourceRequestInput & CancelResourceRequestInput)[K]
    }>): CancelResourceRequestOutput {
        return this.client.cancelResourceRequest(
            this.ops["CancelResourceRequest"].apply(partialParams)
        );
    }

    invokeCreateResource(partialParams: ToOptional<{
      [K in keyof CreateResourceInput & keyof CreateResourceInput & keyof CreateResourceInput & keyof CreateResourceInput & keyof CreateResourceInput & keyof CreateResourceInput]: (CreateResourceInput & CreateResourceInput & CreateResourceInput & CreateResourceInput & CreateResourceInput & CreateResourceInput)[K]
    }>): CreateResourceOutput {
        return this.client.createResource(
            this.ops["CreateResource"].apply(partialParams)
        );
    }

    invokeDeleteResource(partialParams: ToOptional<{
      [K in keyof DeleteResourceInput & keyof DeleteResourceInput & keyof DeleteResourceInput & keyof DeleteResourceInput & keyof DeleteResourceInput & keyof DeleteResourceInput]: (DeleteResourceInput & DeleteResourceInput & DeleteResourceInput & DeleteResourceInput & DeleteResourceInput & DeleteResourceInput)[K]
    }>): DeleteResourceOutput {
        return this.client.deleteResource(
            this.ops["DeleteResource"].apply(partialParams)
        );
    }

    invokeGetResource(partialParams: ToOptional<{
      [K in keyof GetResourceInput & keyof GetResourceInput & keyof GetResourceInput & keyof GetResourceInput & keyof GetResourceInput & keyof GetResourceInput]: (GetResourceInput & GetResourceInput & GetResourceInput & GetResourceInput & GetResourceInput & GetResourceInput)[K]
    }>): GetResourceOutput {
        return this.client.getResource(
            this.ops["GetResource"].apply(partialParams)
        );
    }

    invokeGetResourceRequestStatus(partialParams: ToOptional<{
      [K in keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput]: (GetResourceRequestStatusInput & GetResourceRequestStatusInput & GetResourceRequestStatusInput & GetResourceRequestStatusInput & GetResourceRequestStatusInput & GetResourceRequestStatusInput)[K]
    }>): GetResourceRequestStatusOutput {
        return this.client.getResourceRequestStatus(
            this.ops["GetResourceRequestStatus"].apply(partialParams)
        );
    }

    invokeListResources(partialParams: ToOptional<{
      [K in keyof ListResourcesInput & keyof ListResourcesInput & keyof ListResourcesInput & keyof ListResourcesInput & keyof ListResourcesInput & keyof ListResourcesInput]: (ListResourcesInput & ListResourcesInput & ListResourcesInput & ListResourcesInput & ListResourcesInput & ListResourcesInput)[K]
    }>): ListResourcesOutput {
        return this.client.listResources(
            this.ops["ListResources"].apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceInput & keyof UpdateResourceInput & keyof UpdateResourceInput & keyof UpdateResourceInput & keyof Omit<UpdateResourceInput, "TypeName"> & keyof UpdateResourceInput]: (UpdateResourceInput & UpdateResourceInput & UpdateResourceInput & UpdateResourceInput & Omit<UpdateResourceInput, "TypeName"> & UpdateResourceInput)[K]
    }>): UpdateResourceOutput {
        return this.client.updateResource(
            this.ops["UpdateResource"].apply(partialParams)
        );
    }
}