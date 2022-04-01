
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
    ListMeshesInput,
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
    ListMeshesOutput,
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

export default class extends aws.appmesh.VirtualNode {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appmesh.VirtualNode>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppMesh()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeCreateGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateGatewayRouteInput]: (CreateGatewayRouteInput)[K]
    }>): Request<CreateGatewayRouteOutput, AWSError> {
        this.boot();
        return this.client.createGatewayRoute(
          this.ops["CreateGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateMesh(partialParams: ToOptional<{
      [K in keyof CreateMeshInput]: (CreateMeshInput)[K]
    }>): Request<CreateMeshOutput, AWSError> {
        this.boot();
        return this.client.createMesh(
          this.ops["CreateMesh"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteInput]: (CreateRouteInput)[K]
    }>): Request<CreateRouteOutput, AWSError> {
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeCreateVirtualGateway(partialParams: ToOptional<{
      [K in keyof CreateVirtualGatewayInput]: (CreateVirtualGatewayInput)[K]
    }>): Request<CreateVirtualGatewayOutput, AWSError> {
        this.boot();
        return this.client.createVirtualGateway(
          this.ops["CreateVirtualGateway"].apply(partialParams)
        );
    }

    invokeCreateVirtualNode(partialParams: ToOptional<{
      [K in keyof CreateVirtualNodeInput]: (CreateVirtualNodeInput)[K]
    }>): Request<CreateVirtualNodeOutput, AWSError> {
        this.boot();
        return this.client.createVirtualNode(
          this.ops["CreateVirtualNode"].apply(partialParams)
        );
    }

    invokeCreateVirtualRouter(partialParams: ToOptional<{
      [K in keyof CreateVirtualRouterInput]: (CreateVirtualRouterInput)[K]
    }>): Request<CreateVirtualRouterOutput, AWSError> {
        this.boot();
        return this.client.createVirtualRouter(
          this.ops["CreateVirtualRouter"].apply(partialParams)
        );
    }

    invokeCreateVirtualService(partialParams: ToOptional<{
      [K in keyof CreateVirtualServiceInput]: (CreateVirtualServiceInput)[K]
    }>): Request<CreateVirtualServiceOutput, AWSError> {
        this.boot();
        return this.client.createVirtualService(
          this.ops["CreateVirtualService"].apply(partialParams)
        );
    }

    invokeDeleteGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteGatewayRouteInput]: (DeleteGatewayRouteInput)[K]
    }>): Request<DeleteGatewayRouteOutput, AWSError> {
        this.boot();
        return this.client.deleteGatewayRoute(
          this.ops["DeleteGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteMesh(partialParams: ToOptional<{
      [K in keyof DeleteMeshInput]: (DeleteMeshInput)[K]
    }>): Request<DeleteMeshOutput, AWSError> {
        this.boot();
        return this.client.deleteMesh(
          this.ops["DeleteMesh"].apply(partialParams)
        );
    }

    invokeDeleteRoute(partialParams: ToOptional<{
      [K in keyof DeleteRouteInput]: (DeleteRouteInput)[K]
    }>): Request<DeleteRouteOutput, AWSError> {
        this.boot();
        return this.client.deleteRoute(
          this.ops["DeleteRoute"].apply(partialParams)
        );
    }

    invokeDeleteVirtualGateway(partialParams: ToOptional<{
      [K in keyof DeleteVirtualGatewayInput]: (DeleteVirtualGatewayInput)[K]
    }>): Request<DeleteVirtualGatewayOutput, AWSError> {
        this.boot();
        return this.client.deleteVirtualGateway(
          this.ops["DeleteVirtualGateway"].apply(partialParams)
        );
    }

    invokeDeleteVirtualNode(partialParams: ToOptional<{
      [K in keyof DeleteVirtualNodeInput]: (DeleteVirtualNodeInput)[K]
    }>): Request<DeleteVirtualNodeOutput, AWSError> {
        this.boot();
        return this.client.deleteVirtualNode(
          this.ops["DeleteVirtualNode"].apply(partialParams)
        );
    }

    invokeDeleteVirtualRouter(partialParams: ToOptional<{
      [K in keyof DeleteVirtualRouterInput]: (DeleteVirtualRouterInput)[K]
    }>): Request<DeleteVirtualRouterOutput, AWSError> {
        this.boot();
        return this.client.deleteVirtualRouter(
          this.ops["DeleteVirtualRouter"].apply(partialParams)
        );
    }

    invokeDeleteVirtualService(partialParams: ToOptional<{
      [K in keyof DeleteVirtualServiceInput]: (DeleteVirtualServiceInput)[K]
    }>): Request<DeleteVirtualServiceOutput, AWSError> {
        this.boot();
        return this.client.deleteVirtualService(
          this.ops["DeleteVirtualService"].apply(partialParams)
        );
    }

    invokeDescribeGatewayRoute(partialParams: ToOptional<{
      [K in keyof DescribeGatewayRouteInput]: (DescribeGatewayRouteInput)[K]
    }>): Request<DescribeGatewayRouteOutput, AWSError> {
        this.boot();
        return this.client.describeGatewayRoute(
          this.ops["DescribeGatewayRoute"].apply(partialParams)
        );
    }

    invokeDescribeMesh(partialParams: ToOptional<{
      [K in keyof DescribeMeshInput]: (DescribeMeshInput)[K]
    }>): Request<DescribeMeshOutput, AWSError> {
        this.boot();
        return this.client.describeMesh(
          this.ops["DescribeMesh"].apply(partialParams)
        );
    }

    invokeDescribeRoute(partialParams: ToOptional<{
      [K in keyof DescribeRouteInput]: (DescribeRouteInput)[K]
    }>): Request<DescribeRouteOutput, AWSError> {
        this.boot();
        return this.client.describeRoute(
          this.ops["DescribeRoute"].apply(partialParams)
        );
    }

    invokeDescribeVirtualGateway(partialParams: ToOptional<{
      [K in keyof DescribeVirtualGatewayInput]: (DescribeVirtualGatewayInput)[K]
    }>): Request<DescribeVirtualGatewayOutput, AWSError> {
        this.boot();
        return this.client.describeVirtualGateway(
          this.ops["DescribeVirtualGateway"].apply(partialParams)
        );
    }

    invokeDescribeVirtualNode(partialParams: ToOptional<{
      [K in keyof DescribeVirtualNodeInput]: (DescribeVirtualNodeInput)[K]
    }>): Request<DescribeVirtualNodeOutput, AWSError> {
        this.boot();
        return this.client.describeVirtualNode(
          this.ops["DescribeVirtualNode"].apply(partialParams)
        );
    }

    invokeDescribeVirtualRouter(partialParams: ToOptional<{
      [K in keyof DescribeVirtualRouterInput]: (DescribeVirtualRouterInput)[K]
    }>): Request<DescribeVirtualRouterOutput, AWSError> {
        this.boot();
        return this.client.describeVirtualRouter(
          this.ops["DescribeVirtualRouter"].apply(partialParams)
        );
    }

    invokeDescribeVirtualService(partialParams: ToOptional<{
      [K in keyof DescribeVirtualServiceInput]: (DescribeVirtualServiceInput)[K]
    }>): Request<DescribeVirtualServiceOutput, AWSError> {
        this.boot();
        return this.client.describeVirtualService(
          this.ops["DescribeVirtualService"].apply(partialParams)
        );
    }

    invokeListGatewayRoutes(partialParams: ToOptional<{
      [K in keyof ListGatewayRoutesInput]: (ListGatewayRoutesInput)[K]
    }>): Request<ListGatewayRoutesOutput, AWSError> {
        this.boot();
        return this.client.listGatewayRoutes(
          this.ops["ListGatewayRoutes"].apply(partialParams)
        );
    }

    invokeListMeshes(partialParams: ToOptional<{
      [K in keyof ListMeshesInput]: (ListMeshesInput)[K]
    }>): Request<ListMeshesOutput, AWSError> {
        this.boot();
        return this.client.listMeshes(
          this.ops["ListMeshes"].apply(partialParams)
        );
    }

    invokeListRoutes(partialParams: ToOptional<{
      [K in keyof ListRoutesInput]: (ListRoutesInput)[K]
    }>): Request<ListRoutesOutput, AWSError> {
        this.boot();
        return this.client.listRoutes(
          this.ops["ListRoutes"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput]: (ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListVirtualGateways(partialParams: ToOptional<{
      [K in keyof ListVirtualGatewaysInput]: (ListVirtualGatewaysInput)[K]
    }>): Request<ListVirtualGatewaysOutput, AWSError> {
        this.boot();
        return this.client.listVirtualGateways(
          this.ops["ListVirtualGateways"].apply(partialParams)
        );
    }

    invokeListVirtualNodes(partialParams: ToOptional<{
      [K in keyof ListVirtualNodesInput]: (ListVirtualNodesInput)[K]
    }>): Request<ListVirtualNodesOutput, AWSError> {
        this.boot();
        return this.client.listVirtualNodes(
          this.ops["ListVirtualNodes"].apply(partialParams)
        );
    }

    invokeListVirtualRouters(partialParams: ToOptional<{
      [K in keyof ListVirtualRoutersInput]: (ListVirtualRoutersInput)[K]
    }>): Request<ListVirtualRoutersOutput, AWSError> {
        this.boot();
        return this.client.listVirtualRouters(
          this.ops["ListVirtualRouters"].apply(partialParams)
        );
    }

    invokeListVirtualServices(partialParams: ToOptional<{
      [K in keyof ListVirtualServicesInput]: (ListVirtualServicesInput)[K]
    }>): Request<ListVirtualServicesOutput, AWSError> {
        this.boot();
        return this.client.listVirtualServices(
          this.ops["ListVirtualServices"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput]: (TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput]: (UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateGatewayRoute(partialParams: ToOptional<{
      [K in keyof UpdateGatewayRouteInput]: (UpdateGatewayRouteInput)[K]
    }>): Request<UpdateGatewayRouteOutput, AWSError> {
        this.boot();
        return this.client.updateGatewayRoute(
          this.ops["UpdateGatewayRoute"].apply(partialParams)
        );
    }

    invokeUpdateMesh(partialParams: ToOptional<{
      [K in keyof UpdateMeshInput]: (UpdateMeshInput)[K]
    }>): Request<UpdateMeshOutput, AWSError> {
        this.boot();
        return this.client.updateMesh(
          this.ops["UpdateMesh"].apply(partialParams)
        );
    }

    invokeUpdateRoute(partialParams: ToOptional<{
      [K in keyof UpdateRouteInput]: (UpdateRouteInput)[K]
    }>): Request<UpdateRouteOutput, AWSError> {
        this.boot();
        return this.client.updateRoute(
          this.ops["UpdateRoute"].apply(partialParams)
        );
    }

    invokeUpdateVirtualGateway(partialParams: ToOptional<{
      [K in keyof UpdateVirtualGatewayInput]: (UpdateVirtualGatewayInput)[K]
    }>): Request<UpdateVirtualGatewayOutput, AWSError> {
        this.boot();
        return this.client.updateVirtualGateway(
          this.ops["UpdateVirtualGateway"].apply(partialParams)
        );
    }

    invokeUpdateVirtualNode(partialParams: ToOptional<{
      [K in keyof UpdateVirtualNodeInput]: (UpdateVirtualNodeInput)[K]
    }>): Request<UpdateVirtualNodeOutput, AWSError> {
        this.boot();
        return this.client.updateVirtualNode(
          this.ops["UpdateVirtualNode"].apply(partialParams)
        );
    }

    invokeUpdateVirtualRouter(partialParams: ToOptional<{
      [K in keyof UpdateVirtualRouterInput]: (UpdateVirtualRouterInput)[K]
    }>): Request<UpdateVirtualRouterOutput, AWSError> {
        this.boot();
        return this.client.updateVirtualRouter(
          this.ops["UpdateVirtualRouter"].apply(partialParams)
        );
    }

    invokeUpdateVirtualService(partialParams: ToOptional<{
      [K in keyof UpdateVirtualServiceInput]: (UpdateVirtualServiceInput)[K]
    }>): Request<UpdateVirtualServiceOutput, AWSError> {
        this.boot();
        return this.client.updateVirtualService(
          this.ops["UpdateVirtualService"].apply(partialParams)
        );
    }
}