
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateGatewayRouteInput,
    CreateMeshInput,
    CreateRouteInput,
    CreateVirtualGatewayInput,
    CreateVirtualNodeInput,
    CreateVirtualRouterInput,
    CreateVirtualServiceInput,
    DeleteGatewayRouteInput,
    DeleteMeshInput,
    DeleteRouteInput,
    DeleteVirtualGatewayInput,
    DeleteVirtualNodeInput,
    DeleteVirtualRouterInput,
    DeleteVirtualServiceInput,
    DescribeGatewayRouteInput,
    DescribeMeshInput,
    DescribeRouteInput,
    DescribeVirtualGatewayInput,
    DescribeVirtualNodeInput,
    DescribeVirtualRouterInput,
    DescribeVirtualServiceInput,
    ListGatewayRoutesInput,
    ListRoutesInput,
    ListTagsForResourceInput,
    ListVirtualGatewaysInput,
    ListVirtualNodesInput,
    ListVirtualRoutersInput,
    ListVirtualServicesInput,
    TagResourceInput,
    UntagResourceInput,
    UpdateGatewayRouteInput,
    UpdateMeshInput,
    UpdateRouteInput,
    UpdateVirtualGatewayInput,
    UpdateVirtualNodeInput,
    UpdateVirtualRouterInput,
    UpdateVirtualServiceInput,
    CreateGatewayRouteOutput,
    CreateMeshOutput,
    CreateRouteOutput,
    CreateVirtualGatewayOutput,
    CreateVirtualNodeOutput,
    CreateVirtualRouterOutput,
    CreateVirtualServiceOutput,
    DeleteGatewayRouteOutput,
    DeleteMeshOutput,
    DeleteRouteOutput,
    DeleteVirtualGatewayOutput,
    DeleteVirtualNodeOutput,
    DeleteVirtualRouterOutput,
    DeleteVirtualServiceOutput,
    DescribeGatewayRouteOutput,
    DescribeMeshOutput,
    DescribeRouteOutput,
    DescribeVirtualGatewayOutput,
    DescribeVirtualNodeOutput,
    DescribeVirtualRouterOutput,
    DescribeVirtualServiceOutput,
    ListGatewayRoutesOutput,
    ListRoutesOutput,
    ListTagsForResourceOutput,
    ListVirtualGatewaysOutput,
    ListVirtualNodesOutput,
    ListVirtualRoutersOutput,
    ListVirtualServicesOutput,
    TagResourceOutput,
    UntagResourceOutput,
    UpdateGatewayRouteOutput,
    UpdateMeshOutput,
    UpdateRouteOutput,
    UpdateVirtualGatewayOutput,
    UpdateVirtualNodeOutput,
    UpdateVirtualRouterOutput,
    UpdateVirtualServiceOutput
} from "aws-sdk/clients/appmesh";
const schema = require("../apis/appmesh-2019-01-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appmesh.VirtualRouter {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.appmesh.VirtualRouter>) {
        super(...args)
        this.client = new awssdk.AppMesh()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeCreateGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput]: (CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput)[K]
    }>): Request<CreateGatewayRouteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGatewayRoute(
          this.ops["CreateGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeCreateMesh(partialParams: ToOptional<{
      [K in keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput]: (CreateMeshInput & CreateMeshInput & CreateMeshInput & CreateMeshInput & CreateMeshInput & CreateMeshInput & CreateMeshInput)[K]
    }>): Request<CreateMeshOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMesh(
          this.ops["CreateMesh"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput]: (CreateRouteInput & CreateRouteInput & CreateRouteInput & CreateRouteInput & CreateRouteInput & CreateRouteInput & CreateRouteInput)[K]
    }>): Request<CreateRouteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].applicator.apply(partialParams)
        );
    }

    invokeCreateVirtualGateway(partialParams: ToOptional<{
      [K in keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput]: (CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput)[K]
    }>): Request<CreateVirtualGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVirtualGateway(
          this.ops["CreateVirtualGateway"].applicator.apply(partialParams)
        );
    }

    invokeCreateVirtualNode(partialParams: ToOptional<{
      [K in keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput]: (CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput)[K]
    }>): Request<CreateVirtualNodeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVirtualNode(
          this.ops["CreateVirtualNode"].applicator.apply(partialParams)
        );
    }

    invokeCreateVirtualRouter(partialParams: ToOptional<{
      [K in keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput]: (CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput)[K]
    }>): Request<CreateVirtualRouterOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVirtualRouter(
          this.ops["CreateVirtualRouter"].applicator.apply(partialParams)
        );
    }

    invokeCreateVirtualService(partialParams: ToOptional<{
      [K in keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput]: (CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput)[K]
    }>): Request<CreateVirtualServiceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVirtualService(
          this.ops["CreateVirtualService"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput]: (DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput)[K]
    }>): Request<DeleteGatewayRouteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGatewayRoute(
          this.ops["DeleteGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMesh(partialParams: ToOptional<{
      [K in keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput]: (DeleteMeshInput & DeleteMeshInput & DeleteMeshInput & DeleteMeshInput & DeleteMeshInput & DeleteMeshInput & DeleteMeshInput)[K]
    }>): Request<DeleteMeshOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMesh(
          this.ops["DeleteMesh"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRoute(partialParams: ToOptional<{
      [K in keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput]: (DeleteRouteInput & DeleteRouteInput & DeleteRouteInput & DeleteRouteInput & DeleteRouteInput & DeleteRouteInput & DeleteRouteInput)[K]
    }>): Request<DeleteRouteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoute(
          this.ops["DeleteRoute"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVirtualGateway(partialParams: ToOptional<{
      [K in keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput]: (DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput)[K]
    }>): Request<DeleteVirtualGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualGateway(
          this.ops["DeleteVirtualGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVirtualNode(partialParams: ToOptional<{
      [K in keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput]: (DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput)[K]
    }>): Request<DeleteVirtualNodeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualNode(
          this.ops["DeleteVirtualNode"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVirtualRouter(partialParams: ToOptional<{
      [K in keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput]: (DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput)[K]
    }>): Request<DeleteVirtualRouterOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualRouter(
          this.ops["DeleteVirtualRouter"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVirtualService(partialParams: ToOptional<{
      [K in keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput]: (DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput)[K]
    }>): Request<DeleteVirtualServiceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualService(
          this.ops["DeleteVirtualService"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGatewayRoute(partialParams: ToOptional<{
      [K in keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput]: (DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput)[K]
    }>): Request<DescribeGatewayRouteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGatewayRoute(
          this.ops["DescribeGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMesh(partialParams: ToOptional<{
      [K in keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput]: (DescribeMeshInput & DescribeMeshInput & DescribeMeshInput & DescribeMeshInput & DescribeMeshInput & DescribeMeshInput & DescribeMeshInput)[K]
    }>): Request<DescribeMeshOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMesh(
          this.ops["DescribeMesh"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRoute(partialParams: ToOptional<{
      [K in keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput]: (DescribeRouteInput & DescribeRouteInput & DescribeRouteInput & DescribeRouteInput & DescribeRouteInput & DescribeRouteInput & DescribeRouteInput)[K]
    }>): Request<DescribeRouteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRoute(
          this.ops["DescribeRoute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVirtualGateway(partialParams: ToOptional<{
      [K in keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput]: (DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput)[K]
    }>): Request<DescribeVirtualGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVirtualGateway(
          this.ops["DescribeVirtualGateway"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVirtualNode(partialParams: ToOptional<{
      [K in keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput]: (DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput)[K]
    }>): Request<DescribeVirtualNodeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVirtualNode(
          this.ops["DescribeVirtualNode"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVirtualRouter(partialParams: ToOptional<{
      [K in keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput]: (DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput)[K]
    }>): Request<DescribeVirtualRouterOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVirtualRouter(
          this.ops["DescribeVirtualRouter"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVirtualService(partialParams: ToOptional<{
      [K in keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput]: (DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput)[K]
    }>): Request<DescribeVirtualServiceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVirtualService(
          this.ops["DescribeVirtualService"].applicator.apply(partialParams)
        );
    }

    invokeListGatewayRoutes(partialParams: ToOptional<{
      [K in keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput]: (ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput)[K]
    }>): Request<ListGatewayRoutesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGatewayRoutes(
          this.ops["ListGatewayRoutes"].applicator.apply(partialParams)
        );
    }

    invokeListRoutes(partialParams: ToOptional<{
      [K in keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput]: (ListRoutesInput & ListRoutesInput & ListRoutesInput & ListRoutesInput & ListRoutesInput & ListRoutesInput & ListRoutesInput)[K]
    }>): Request<ListRoutesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoutes(
          this.ops["ListRoutes"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceInput, "resourceArn"> & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (Omit<ListTagsForResourceInput, "resourceArn"> & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListVirtualGateways(partialParams: ToOptional<{
      [K in keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput]: (ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput)[K]
    }>): Request<ListVirtualGatewaysOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVirtualGateways(
          this.ops["ListVirtualGateways"].applicator.apply(partialParams)
        );
    }

    invokeListVirtualNodes(partialParams: ToOptional<{
      [K in keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput]: (ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput)[K]
    }>): Request<ListVirtualNodesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVirtualNodes(
          this.ops["ListVirtualNodes"].applicator.apply(partialParams)
        );
    }

    invokeListVirtualRouters(partialParams: ToOptional<{
      [K in keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput]: (ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput)[K]
    }>): Request<ListVirtualRoutersOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVirtualRouters(
          this.ops["ListVirtualRouters"].applicator.apply(partialParams)
        );
    }

    invokeListVirtualServices(partialParams: ToOptional<{
      [K in keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput]: (ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput)[K]
    }>): Request<ListVirtualServicesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVirtualServices(
          this.ops["ListVirtualServices"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceInput, "resourceArn"> & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (Omit<TagResourceInput, "resourceArn"> & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceInput, "resourceArn"> & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (Omit<UntagResourceInput, "resourceArn"> & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGatewayRoute(partialParams: ToOptional<{
      [K in keyof UpdateGatewayRouteInput & keyof UpdateGatewayRouteInput & keyof UpdateGatewayRouteInput & keyof Omit<UpdateGatewayRouteInput, "meshName"> & keyof UpdateGatewayRouteInput & keyof UpdateGatewayRouteInput & keyof UpdateGatewayRouteInput]: (UpdateGatewayRouteInput & UpdateGatewayRouteInput & UpdateGatewayRouteInput & Omit<UpdateGatewayRouteInput, "meshName"> & UpdateGatewayRouteInput & UpdateGatewayRouteInput & UpdateGatewayRouteInput)[K]
    }>): Request<UpdateGatewayRouteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGatewayRoute(
          this.ops["UpdateGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMesh(partialParams: ToOptional<{
      [K in keyof UpdateMeshInput & keyof UpdateMeshInput & keyof UpdateMeshInput & keyof Omit<UpdateMeshInput, "meshName"> & keyof UpdateMeshInput & keyof UpdateMeshInput & keyof UpdateMeshInput]: (UpdateMeshInput & UpdateMeshInput & UpdateMeshInput & Omit<UpdateMeshInput, "meshName"> & UpdateMeshInput & UpdateMeshInput & UpdateMeshInput)[K]
    }>): Request<UpdateMeshOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMesh(
          this.ops["UpdateMesh"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoute(partialParams: ToOptional<{
      [K in keyof UpdateRouteInput & keyof UpdateRouteInput & keyof UpdateRouteInput & keyof Omit<UpdateRouteInput, "meshName"> & keyof UpdateRouteInput & keyof UpdateRouteInput & keyof UpdateRouteInput]: (UpdateRouteInput & UpdateRouteInput & UpdateRouteInput & Omit<UpdateRouteInput, "meshName"> & UpdateRouteInput & UpdateRouteInput & UpdateRouteInput)[K]
    }>): Request<UpdateRouteOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoute(
          this.ops["UpdateRoute"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVirtualGateway(partialParams: ToOptional<{
      [K in keyof UpdateVirtualGatewayInput & keyof UpdateVirtualGatewayInput & keyof UpdateVirtualGatewayInput & keyof Omit<UpdateVirtualGatewayInput, "meshName"> & keyof UpdateVirtualGatewayInput & keyof UpdateVirtualGatewayInput & keyof UpdateVirtualGatewayInput]: (UpdateVirtualGatewayInput & UpdateVirtualGatewayInput & UpdateVirtualGatewayInput & Omit<UpdateVirtualGatewayInput, "meshName"> & UpdateVirtualGatewayInput & UpdateVirtualGatewayInput & UpdateVirtualGatewayInput)[K]
    }>): Request<UpdateVirtualGatewayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVirtualGateway(
          this.ops["UpdateVirtualGateway"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVirtualNode(partialParams: ToOptional<{
      [K in keyof UpdateVirtualNodeInput & keyof UpdateVirtualNodeInput & keyof UpdateVirtualNodeInput & keyof Omit<UpdateVirtualNodeInput, "meshName"> & keyof UpdateVirtualNodeInput & keyof UpdateVirtualNodeInput & keyof UpdateVirtualNodeInput]: (UpdateVirtualNodeInput & UpdateVirtualNodeInput & UpdateVirtualNodeInput & Omit<UpdateVirtualNodeInput, "meshName"> & UpdateVirtualNodeInput & UpdateVirtualNodeInput & UpdateVirtualNodeInput)[K]
    }>): Request<UpdateVirtualNodeOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVirtualNode(
          this.ops["UpdateVirtualNode"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVirtualRouter(partialParams: ToOptional<{
      [K in keyof UpdateVirtualRouterInput & keyof UpdateVirtualRouterInput & keyof UpdateVirtualRouterInput & keyof Omit<UpdateVirtualRouterInput, "meshName"> & keyof UpdateVirtualRouterInput & keyof UpdateVirtualRouterInput & keyof UpdateVirtualRouterInput]: (UpdateVirtualRouterInput & UpdateVirtualRouterInput & UpdateVirtualRouterInput & Omit<UpdateVirtualRouterInput, "meshName"> & UpdateVirtualRouterInput & UpdateVirtualRouterInput & UpdateVirtualRouterInput)[K]
    }>): Request<UpdateVirtualRouterOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVirtualRouter(
          this.ops["UpdateVirtualRouter"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVirtualService(partialParams: ToOptional<{
      [K in keyof UpdateVirtualServiceInput & keyof UpdateVirtualServiceInput & keyof UpdateVirtualServiceInput & keyof Omit<UpdateVirtualServiceInput, "meshName"> & keyof UpdateVirtualServiceInput & keyof UpdateVirtualServiceInput & keyof UpdateVirtualServiceInput]: (UpdateVirtualServiceInput & UpdateVirtualServiceInput & UpdateVirtualServiceInput & Omit<UpdateVirtualServiceInput, "meshName"> & UpdateVirtualServiceInput & UpdateVirtualServiceInput & UpdateVirtualServiceInput)[K]
    }>): Request<UpdateVirtualServiceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVirtualService(
          this.ops["UpdateVirtualService"].applicator.apply(partialParams)
        );
    }
}