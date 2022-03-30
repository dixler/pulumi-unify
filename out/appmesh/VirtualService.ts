
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appmesh.VirtualService {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.appmesh.VirtualService>) {
        super(...args)
        this.client = new awssdk.AppMesh()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/appmesh-2019-01-25.normal.json"), this.client)
    }

    invokeCreateGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput & keyof CreateGatewayRouteInput]: (CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput & CreateGatewayRouteInput)[K]
    }>): CreateGatewayRouteOutput {
        return this.client.createGatewayRoute(
            this.ops["CreateGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateMesh(partialParams: ToOptional<{
      [K in keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput & keyof CreateMeshInput]: (CreateMeshInput & CreateMeshInput & CreateMeshInput & CreateMeshInput & CreateMeshInput & CreateMeshInput & CreateMeshInput)[K]
    }>): CreateMeshOutput {
        return this.client.createMesh(
            this.ops["CreateMesh"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput & keyof CreateRouteInput]: (CreateRouteInput & CreateRouteInput & CreateRouteInput & CreateRouteInput & CreateRouteInput & CreateRouteInput & CreateRouteInput)[K]
    }>): CreateRouteOutput {
        return this.client.createRoute(
            this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeCreateVirtualGateway(partialParams: ToOptional<{
      [K in keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput & keyof CreateVirtualGatewayInput]: (CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput & CreateVirtualGatewayInput)[K]
    }>): CreateVirtualGatewayOutput {
        return this.client.createVirtualGateway(
            this.ops["CreateVirtualGateway"].apply(partialParams)
        );
    }

    invokeCreateVirtualNode(partialParams: ToOptional<{
      [K in keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput & keyof CreateVirtualNodeInput]: (CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput & CreateVirtualNodeInput)[K]
    }>): CreateVirtualNodeOutput {
        return this.client.createVirtualNode(
            this.ops["CreateVirtualNode"].apply(partialParams)
        );
    }

    invokeCreateVirtualRouter(partialParams: ToOptional<{
      [K in keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput & keyof CreateVirtualRouterInput]: (CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput & CreateVirtualRouterInput)[K]
    }>): CreateVirtualRouterOutput {
        return this.client.createVirtualRouter(
            this.ops["CreateVirtualRouter"].apply(partialParams)
        );
    }

    invokeCreateVirtualService(partialParams: ToOptional<{
      [K in keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput & keyof CreateVirtualServiceInput]: (CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput & CreateVirtualServiceInput)[K]
    }>): CreateVirtualServiceOutput {
        return this.client.createVirtualService(
            this.ops["CreateVirtualService"].apply(partialParams)
        );
    }

    invokeDeleteGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput & keyof DeleteGatewayRouteInput]: (DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput & DeleteGatewayRouteInput)[K]
    }>): DeleteGatewayRouteOutput {
        return this.client.deleteGatewayRoute(
            this.ops["DeleteGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteMesh(partialParams: ToOptional<{
      [K in keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput & keyof DeleteMeshInput]: (DeleteMeshInput & DeleteMeshInput & DeleteMeshInput & DeleteMeshInput & DeleteMeshInput & DeleteMeshInput & DeleteMeshInput)[K]
    }>): DeleteMeshOutput {
        return this.client.deleteMesh(
            this.ops["DeleteMesh"].apply(partialParams)
        );
    }

    invokeDeleteRoute(partialParams: ToOptional<{
      [K in keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput & keyof DeleteRouteInput]: (DeleteRouteInput & DeleteRouteInput & DeleteRouteInput & DeleteRouteInput & DeleteRouteInput & DeleteRouteInput & DeleteRouteInput)[K]
    }>): DeleteRouteOutput {
        return this.client.deleteRoute(
            this.ops["DeleteRoute"].apply(partialParams)
        );
    }

    invokeDeleteVirtualGateway(partialParams: ToOptional<{
      [K in keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput & keyof DeleteVirtualGatewayInput]: (DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput & DeleteVirtualGatewayInput)[K]
    }>): DeleteVirtualGatewayOutput {
        return this.client.deleteVirtualGateway(
            this.ops["DeleteVirtualGateway"].apply(partialParams)
        );
    }

    invokeDeleteVirtualNode(partialParams: ToOptional<{
      [K in keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput & keyof DeleteVirtualNodeInput]: (DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput & DeleteVirtualNodeInput)[K]
    }>): DeleteVirtualNodeOutput {
        return this.client.deleteVirtualNode(
            this.ops["DeleteVirtualNode"].apply(partialParams)
        );
    }

    invokeDeleteVirtualRouter(partialParams: ToOptional<{
      [K in keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput & keyof DeleteVirtualRouterInput]: (DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput & DeleteVirtualRouterInput)[K]
    }>): DeleteVirtualRouterOutput {
        return this.client.deleteVirtualRouter(
            this.ops["DeleteVirtualRouter"].apply(partialParams)
        );
    }

    invokeDeleteVirtualService(partialParams: ToOptional<{
      [K in keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput & keyof DeleteVirtualServiceInput]: (DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput & DeleteVirtualServiceInput)[K]
    }>): DeleteVirtualServiceOutput {
        return this.client.deleteVirtualService(
            this.ops["DeleteVirtualService"].apply(partialParams)
        );
    }

    invokeDescribeGatewayRoute(partialParams: ToOptional<{
      [K in keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput & keyof DescribeGatewayRouteInput]: (DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput & DescribeGatewayRouteInput)[K]
    }>): DescribeGatewayRouteOutput {
        return this.client.describeGatewayRoute(
            this.ops["DescribeGatewayRoute"].apply(partialParams)
        );
    }

    invokeDescribeMesh(partialParams: ToOptional<{
      [K in keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput & keyof DescribeMeshInput]: (DescribeMeshInput & DescribeMeshInput & DescribeMeshInput & DescribeMeshInput & DescribeMeshInput & DescribeMeshInput & DescribeMeshInput)[K]
    }>): DescribeMeshOutput {
        return this.client.describeMesh(
            this.ops["DescribeMesh"].apply(partialParams)
        );
    }

    invokeDescribeRoute(partialParams: ToOptional<{
      [K in keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput & keyof DescribeRouteInput]: (DescribeRouteInput & DescribeRouteInput & DescribeRouteInput & DescribeRouteInput & DescribeRouteInput & DescribeRouteInput & DescribeRouteInput)[K]
    }>): DescribeRouteOutput {
        return this.client.describeRoute(
            this.ops["DescribeRoute"].apply(partialParams)
        );
    }

    invokeDescribeVirtualGateway(partialParams: ToOptional<{
      [K in keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput & keyof DescribeVirtualGatewayInput]: (DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput & DescribeVirtualGatewayInput)[K]
    }>): DescribeVirtualGatewayOutput {
        return this.client.describeVirtualGateway(
            this.ops["DescribeVirtualGateway"].apply(partialParams)
        );
    }

    invokeDescribeVirtualNode(partialParams: ToOptional<{
      [K in keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput & keyof DescribeVirtualNodeInput]: (DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput & DescribeVirtualNodeInput)[K]
    }>): DescribeVirtualNodeOutput {
        return this.client.describeVirtualNode(
            this.ops["DescribeVirtualNode"].apply(partialParams)
        );
    }

    invokeDescribeVirtualRouter(partialParams: ToOptional<{
      [K in keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput & keyof DescribeVirtualRouterInput]: (DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput & DescribeVirtualRouterInput)[K]
    }>): DescribeVirtualRouterOutput {
        return this.client.describeVirtualRouter(
            this.ops["DescribeVirtualRouter"].apply(partialParams)
        );
    }

    invokeDescribeVirtualService(partialParams: ToOptional<{
      [K in keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput & keyof DescribeVirtualServiceInput]: (DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput & DescribeVirtualServiceInput)[K]
    }>): DescribeVirtualServiceOutput {
        return this.client.describeVirtualService(
            this.ops["DescribeVirtualService"].apply(partialParams)
        );
    }

    invokeListGatewayRoutes(partialParams: ToOptional<{
      [K in keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput & keyof ListGatewayRoutesInput]: (ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput & ListGatewayRoutesInput)[K]
    }>): ListGatewayRoutesOutput {
        return this.client.listGatewayRoutes(
            this.ops["ListGatewayRoutes"].apply(partialParams)
        );
    }

    invokeListRoutes(partialParams: ToOptional<{
      [K in keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput & keyof ListRoutesInput]: (ListRoutesInput & ListRoutesInput & ListRoutesInput & ListRoutesInput & ListRoutesInput & ListRoutesInput & ListRoutesInput)[K]
    }>): ListRoutesOutput {
        return this.client.listRoutes(
            this.ops["ListRoutes"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceInput, "resourceArn"> & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (Omit<ListTagsForResourceInput, "resourceArn"> & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListVirtualGateways(partialParams: ToOptional<{
      [K in keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput & keyof ListVirtualGatewaysInput]: (ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput & ListVirtualGatewaysInput)[K]
    }>): ListVirtualGatewaysOutput {
        return this.client.listVirtualGateways(
            this.ops["ListVirtualGateways"].apply(partialParams)
        );
    }

    invokeListVirtualNodes(partialParams: ToOptional<{
      [K in keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput & keyof ListVirtualNodesInput]: (ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput & ListVirtualNodesInput)[K]
    }>): ListVirtualNodesOutput {
        return this.client.listVirtualNodes(
            this.ops["ListVirtualNodes"].apply(partialParams)
        );
    }

    invokeListVirtualRouters(partialParams: ToOptional<{
      [K in keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput & keyof ListVirtualRoutersInput]: (ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput & ListVirtualRoutersInput)[K]
    }>): ListVirtualRoutersOutput {
        return this.client.listVirtualRouters(
            this.ops["ListVirtualRouters"].apply(partialParams)
        );
    }

    invokeListVirtualServices(partialParams: ToOptional<{
      [K in keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput & keyof ListVirtualServicesInput]: (ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput & ListVirtualServicesInput)[K]
    }>): ListVirtualServicesOutput {
        return this.client.listVirtualServices(
            this.ops["ListVirtualServices"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceInput, "resourceArn"> & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (Omit<TagResourceInput, "resourceArn"> & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): TagResourceOutput {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceInput, "resourceArn"> & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (Omit<UntagResourceInput, "resourceArn"> & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): UntagResourceOutput {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateGatewayRoute(partialParams: ToOptional<{
      [K in keyof UpdateGatewayRouteInput & keyof UpdateGatewayRouteInput & keyof UpdateGatewayRouteInput & keyof Omit<UpdateGatewayRouteInput, "meshName"> & keyof UpdateGatewayRouteInput & keyof UpdateGatewayRouteInput & keyof UpdateGatewayRouteInput]: (UpdateGatewayRouteInput & UpdateGatewayRouteInput & UpdateGatewayRouteInput & Omit<UpdateGatewayRouteInput, "meshName"> & UpdateGatewayRouteInput & UpdateGatewayRouteInput & UpdateGatewayRouteInput)[K]
    }>): UpdateGatewayRouteOutput {
        return this.client.updateGatewayRoute(
            this.ops["UpdateGatewayRoute"].apply(partialParams)
        );
    }

    invokeUpdateMesh(partialParams: ToOptional<{
      [K in keyof UpdateMeshInput & keyof UpdateMeshInput & keyof UpdateMeshInput & keyof Omit<UpdateMeshInput, "meshName"> & keyof UpdateMeshInput & keyof UpdateMeshInput & keyof UpdateMeshInput]: (UpdateMeshInput & UpdateMeshInput & UpdateMeshInput & Omit<UpdateMeshInput, "meshName"> & UpdateMeshInput & UpdateMeshInput & UpdateMeshInput)[K]
    }>): UpdateMeshOutput {
        return this.client.updateMesh(
            this.ops["UpdateMesh"].apply(partialParams)
        );
    }

    invokeUpdateRoute(partialParams: ToOptional<{
      [K in keyof UpdateRouteInput & keyof UpdateRouteInput & keyof UpdateRouteInput & keyof Omit<UpdateRouteInput, "meshName"> & keyof UpdateRouteInput & keyof UpdateRouteInput & keyof UpdateRouteInput]: (UpdateRouteInput & UpdateRouteInput & UpdateRouteInput & Omit<UpdateRouteInput, "meshName"> & UpdateRouteInput & UpdateRouteInput & UpdateRouteInput)[K]
    }>): UpdateRouteOutput {
        return this.client.updateRoute(
            this.ops["UpdateRoute"].apply(partialParams)
        );
    }

    invokeUpdateVirtualGateway(partialParams: ToOptional<{
      [K in keyof UpdateVirtualGatewayInput & keyof UpdateVirtualGatewayInput & keyof UpdateVirtualGatewayInput & keyof Omit<UpdateVirtualGatewayInput, "meshName"> & keyof UpdateVirtualGatewayInput & keyof UpdateVirtualGatewayInput & keyof UpdateVirtualGatewayInput]: (UpdateVirtualGatewayInput & UpdateVirtualGatewayInput & UpdateVirtualGatewayInput & Omit<UpdateVirtualGatewayInput, "meshName"> & UpdateVirtualGatewayInput & UpdateVirtualGatewayInput & UpdateVirtualGatewayInput)[K]
    }>): UpdateVirtualGatewayOutput {
        return this.client.updateVirtualGateway(
            this.ops["UpdateVirtualGateway"].apply(partialParams)
        );
    }

    invokeUpdateVirtualNode(partialParams: ToOptional<{
      [K in keyof UpdateVirtualNodeInput & keyof UpdateVirtualNodeInput & keyof UpdateVirtualNodeInput & keyof Omit<UpdateVirtualNodeInput, "meshName"> & keyof UpdateVirtualNodeInput & keyof UpdateVirtualNodeInput & keyof UpdateVirtualNodeInput]: (UpdateVirtualNodeInput & UpdateVirtualNodeInput & UpdateVirtualNodeInput & Omit<UpdateVirtualNodeInput, "meshName"> & UpdateVirtualNodeInput & UpdateVirtualNodeInput & UpdateVirtualNodeInput)[K]
    }>): UpdateVirtualNodeOutput {
        return this.client.updateVirtualNode(
            this.ops["UpdateVirtualNode"].apply(partialParams)
        );
    }

    invokeUpdateVirtualRouter(partialParams: ToOptional<{
      [K in keyof UpdateVirtualRouterInput & keyof UpdateVirtualRouterInput & keyof UpdateVirtualRouterInput & keyof Omit<UpdateVirtualRouterInput, "meshName"> & keyof UpdateVirtualRouterInput & keyof UpdateVirtualRouterInput & keyof UpdateVirtualRouterInput]: (UpdateVirtualRouterInput & UpdateVirtualRouterInput & UpdateVirtualRouterInput & Omit<UpdateVirtualRouterInput, "meshName"> & UpdateVirtualRouterInput & UpdateVirtualRouterInput & UpdateVirtualRouterInput)[K]
    }>): UpdateVirtualRouterOutput {
        return this.client.updateVirtualRouter(
            this.ops["UpdateVirtualRouter"].apply(partialParams)
        );
    }

    invokeUpdateVirtualService(partialParams: ToOptional<{
      [K in keyof UpdateVirtualServiceInput & keyof UpdateVirtualServiceInput & keyof UpdateVirtualServiceInput & keyof Omit<UpdateVirtualServiceInput, "meshName"> & keyof UpdateVirtualServiceInput & keyof UpdateVirtualServiceInput & keyof UpdateVirtualServiceInput]: (UpdateVirtualServiceInput & UpdateVirtualServiceInput & UpdateVirtualServiceInput & Omit<UpdateVirtualServiceInput, "meshName"> & UpdateVirtualServiceInput & UpdateVirtualServiceInput & UpdateVirtualServiceInput)[K]
    }>): UpdateVirtualServiceOutput {
        return this.client.updateVirtualService(
            this.ops["UpdateVirtualService"].apply(partialParams)
        );
    }
}