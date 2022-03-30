
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateAppRequest,
    CreateCampaignRequest,
    CreateEmailTemplateRequest,
    CreateExportJobRequest,
    CreateImportJobRequest,
    CreateInAppTemplateRequest,
    CreateJourneyRequest,
    CreatePushTemplateRequest,
    CreateRecommenderConfigurationRequest,
    CreateSegmentRequest,
    CreateSmsTemplateRequest,
    CreateVoiceTemplateRequest,
    DeleteAdmChannelRequest,
    DeleteApnsChannelRequest,
    DeleteApnsSandboxChannelRequest,
    DeleteApnsVoipChannelRequest,
    DeleteApnsVoipSandboxChannelRequest,
    DeleteAppRequest,
    DeleteBaiduChannelRequest,
    DeleteCampaignRequest,
    DeleteEmailChannelRequest,
    DeleteEmailTemplateRequest,
    DeleteEndpointRequest,
    DeleteEventStreamRequest,
    DeleteGcmChannelRequest,
    DeleteInAppTemplateRequest,
    DeleteJourneyRequest,
    DeletePushTemplateRequest,
    DeleteRecommenderConfigurationRequest,
    DeleteSegmentRequest,
    DeleteSmsChannelRequest,
    DeleteSmsTemplateRequest,
    DeleteUserEndpointsRequest,
    DeleteVoiceChannelRequest,
    DeleteVoiceTemplateRequest,
    GetAdmChannelRequest,
    GetApnsChannelRequest,
    GetApnsSandboxChannelRequest,
    GetApnsVoipChannelRequest,
    GetApnsVoipSandboxChannelRequest,
    GetAppRequest,
    GetApplicationDateRangeKpiRequest,
    GetApplicationSettingsRequest,
    GetBaiduChannelRequest,
    GetCampaignRequest,
    GetCampaignActivitiesRequest,
    GetCampaignDateRangeKpiRequest,
    GetCampaignVersionRequest,
    GetCampaignVersionsRequest,
    GetCampaignsRequest,
    GetChannelsRequest,
    GetEmailChannelRequest,
    GetEmailTemplateRequest,
    GetEndpointRequest,
    GetEventStreamRequest,
    GetExportJobRequest,
    GetExportJobsRequest,
    GetGcmChannelRequest,
    GetImportJobRequest,
    GetImportJobsRequest,
    GetInAppMessagesRequest,
    GetInAppTemplateRequest,
    GetJourneyRequest,
    GetJourneyDateRangeKpiRequest,
    GetJourneyExecutionActivityMetricsRequest,
    GetJourneyExecutionMetricsRequest,
    GetPushTemplateRequest,
    GetRecommenderConfigurationRequest,
    GetSegmentRequest,
    GetSegmentExportJobsRequest,
    GetSegmentImportJobsRequest,
    GetSegmentVersionRequest,
    GetSegmentVersionsRequest,
    GetSegmentsRequest,
    GetSmsChannelRequest,
    GetSmsTemplateRequest,
    GetUserEndpointsRequest,
    GetVoiceChannelRequest,
    GetVoiceTemplateRequest,
    ListJourneysRequest,
    ListTagsForResourceRequest,
    ListTemplateVersionsRequest,
    PhoneNumberValidateRequest,
    PutEventStreamRequest,
    PutEventsRequest,
    RemoveAttributesRequest,
    SendMessagesRequest,
    SendOTPMessageRequest,
    SendUsersMessagesRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAdmChannelRequest,
    UpdateApnsChannelRequest,
    UpdateApnsSandboxChannelRequest,
    UpdateApnsVoipChannelRequest,
    UpdateApnsVoipSandboxChannelRequest,
    UpdateApplicationSettingsRequest,
    UpdateBaiduChannelRequest,
    UpdateCampaignRequest,
    UpdateEmailChannelRequest,
    UpdateEmailTemplateRequest,
    UpdateEndpointRequest,
    UpdateEndpointsBatchRequest,
    UpdateGcmChannelRequest,
    UpdateInAppTemplateRequest,
    UpdateJourneyRequest,
    UpdateJourneyStateRequest,
    UpdatePushTemplateRequest,
    UpdateRecommenderConfigurationRequest,
    UpdateSegmentRequest,
    UpdateSmsChannelRequest,
    UpdateSmsTemplateRequest,
    UpdateTemplateActiveVersionRequest,
    UpdateVoiceChannelRequest,
    UpdateVoiceTemplateRequest,
    VerifyOTPMessageRequest,
    CreateAppResponse,
    CreateCampaignResponse,
    CreateEmailTemplateResponse,
    CreateExportJobResponse,
    CreateImportJobResponse,
    CreateInAppTemplateResponse,
    CreateJourneyResponse,
    CreatePushTemplateResponse,
    CreateRecommenderConfigurationResponse,
    CreateSegmentResponse,
    CreateSmsTemplateResponse,
    CreateVoiceTemplateResponse,
    DeleteAdmChannelResponse,
    DeleteApnsChannelResponse,
    DeleteApnsSandboxChannelResponse,
    DeleteApnsVoipChannelResponse,
    DeleteApnsVoipSandboxChannelResponse,
    DeleteAppResponse,
    DeleteBaiduChannelResponse,
    DeleteCampaignResponse,
    DeleteEmailChannelResponse,
    DeleteEmailTemplateResponse,
    DeleteEndpointResponse,
    DeleteEventStreamResponse,
    DeleteGcmChannelResponse,
    DeleteInAppTemplateResponse,
    DeleteJourneyResponse,
    DeletePushTemplateResponse,
    DeleteRecommenderConfigurationResponse,
    DeleteSegmentResponse,
    DeleteSmsChannelResponse,
    DeleteSmsTemplateResponse,
    DeleteUserEndpointsResponse,
    DeleteVoiceChannelResponse,
    DeleteVoiceTemplateResponse,
    GetAdmChannelResponse,
    GetApnsChannelResponse,
    GetApnsSandboxChannelResponse,
    GetApnsVoipChannelResponse,
    GetApnsVoipSandboxChannelResponse,
    GetAppResponse,
    GetApplicationDateRangeKpiResponse,
    GetApplicationSettingsResponse,
    GetBaiduChannelResponse,
    GetCampaignResponse,
    GetCampaignActivitiesResponse,
    GetCampaignDateRangeKpiResponse,
    GetCampaignVersionResponse,
    GetCampaignVersionsResponse,
    GetCampaignsResponse,
    GetChannelsResponse,
    GetEmailChannelResponse,
    GetEmailTemplateResponse,
    GetEndpointResponse,
    GetEventStreamResponse,
    GetExportJobResponse,
    GetExportJobsResponse,
    GetGcmChannelResponse,
    GetImportJobResponse,
    GetImportJobsResponse,
    GetInAppMessagesResponse,
    GetInAppTemplateResponse,
    GetJourneyResponse,
    GetJourneyDateRangeKpiResponse,
    GetJourneyExecutionActivityMetricsResponse,
    GetJourneyExecutionMetricsResponse,
    GetPushTemplateResponse,
    GetRecommenderConfigurationResponse,
    GetSegmentResponse,
    GetSegmentExportJobsResponse,
    GetSegmentImportJobsResponse,
    GetSegmentVersionResponse,
    GetSegmentVersionsResponse,
    GetSegmentsResponse,
    GetSmsChannelResponse,
    GetSmsTemplateResponse,
    GetUserEndpointsResponse,
    GetVoiceChannelResponse,
    GetVoiceTemplateResponse,
    ListJourneysResponse,
    ListTagsForResourceResponse,
    ListTemplateVersionsResponse,
    PhoneNumberValidateResponse,
    PutEventStreamResponse,
    PutEventsResponse,
    RemoveAttributesResponse,
    SendMessagesResponse,
    SendOTPMessageResponse,
    SendUsersMessagesResponse,
    UpdateAdmChannelResponse,
    UpdateApnsChannelResponse,
    UpdateApnsSandboxChannelResponse,
    UpdateApnsVoipChannelResponse,
    UpdateApnsVoipSandboxChannelResponse,
    UpdateApplicationSettingsResponse,
    UpdateBaiduChannelResponse,
    UpdateCampaignResponse,
    UpdateEmailChannelResponse,
    UpdateEmailTemplateResponse,
    UpdateEndpointResponse,
    UpdateEndpointsBatchResponse,
    UpdateGcmChannelResponse,
    UpdateInAppTemplateResponse,
    UpdateJourneyResponse,
    UpdateJourneyStateResponse,
    UpdatePushTemplateResponse,
    UpdateRecommenderConfigurationResponse,
    UpdateSegmentResponse,
    UpdateSmsChannelResponse,
    UpdateSmsTemplateResponse,
    UpdateTemplateActiveVersionResponse,
    UpdateVoiceChannelResponse,
    UpdateVoiceTemplateResponse,
    VerifyOTPMessageResponse
} from "aws-sdk/clients/pinpoint";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.pinpoint.ApnsVoipChannel {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.pinpoint.ApnsVoipChannel>) {
        super(...args)
        this.client = new awssdk.Pinpoint()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/pinpoint-2016-12-01.normal.json"), this.client)
    }

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): CreateAppResponse {
        return this.client.createApp(
            this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateCampaign(partialParams: ToOptional<{
      [K in keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest]: (CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest)[K]
    }>): CreateCampaignResponse {
        return this.client.createCampaign(
            this.ops["CreateCampaign"].apply(partialParams)
        );
    }

    invokeCreateEmailTemplate(partialParams: ToOptional<{
      [K in keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest]: (CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest)[K]
    }>): CreateEmailTemplateResponse {
        return this.client.createEmailTemplate(
            this.ops["CreateEmailTemplate"].apply(partialParams)
        );
    }

    invokeCreateExportJob(partialParams: ToOptional<{
      [K in keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest]: (CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest)[K]
    }>): CreateExportJobResponse {
        return this.client.createExportJob(
            this.ops["CreateExportJob"].apply(partialParams)
        );
    }

    invokeCreateImportJob(partialParams: ToOptional<{
      [K in keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest]: (CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest)[K]
    }>): CreateImportJobResponse {
        return this.client.createImportJob(
            this.ops["CreateImportJob"].apply(partialParams)
        );
    }

    invokeCreateInAppTemplate(partialParams: ToOptional<{
      [K in keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest]: (CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest)[K]
    }>): CreateInAppTemplateResponse {
        return this.client.createInAppTemplate(
            this.ops["CreateInAppTemplate"].apply(partialParams)
        );
    }

    invokeCreateJourney(partialParams: ToOptional<{
      [K in keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest]: (CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest)[K]
    }>): CreateJourneyResponse {
        return this.client.createJourney(
            this.ops["CreateJourney"].apply(partialParams)
        );
    }

    invokeCreatePushTemplate(partialParams: ToOptional<{
      [K in keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest]: (CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest)[K]
    }>): CreatePushTemplateResponse {
        return this.client.createPushTemplate(
            this.ops["CreatePushTemplate"].apply(partialParams)
        );
    }

    invokeCreateRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest]: (CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest)[K]
    }>): CreateRecommenderConfigurationResponse {
        return this.client.createRecommenderConfiguration(
            this.ops["CreateRecommenderConfiguration"].apply(partialParams)
        );
    }

    invokeCreateSegment(partialParams: ToOptional<{
      [K in keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest]: (CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest)[K]
    }>): CreateSegmentResponse {
        return this.client.createSegment(
            this.ops["CreateSegment"].apply(partialParams)
        );
    }

    invokeCreateSmsTemplate(partialParams: ToOptional<{
      [K in keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest]: (CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest)[K]
    }>): CreateSmsTemplateResponse {
        return this.client.createSmsTemplate(
            this.ops["CreateSmsTemplate"].apply(partialParams)
        );
    }

    invokeCreateVoiceTemplate(partialParams: ToOptional<{
      [K in keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest]: (CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest)[K]
    }>): CreateVoiceTemplateResponse {
        return this.client.createVoiceTemplate(
            this.ops["CreateVoiceTemplate"].apply(partialParams)
        );
    }

    invokeDeleteAdmChannel(partialParams: ToOptional<{
      [K in keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest]: (DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest)[K]
    }>): DeleteAdmChannelResponse {
        return this.client.deleteAdmChannel(
            this.ops["DeleteAdmChannel"].apply(partialParams)
        );
    }

    invokeDeleteApnsChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest]: (DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest)[K]
    }>): DeleteApnsChannelResponse {
        return this.client.deleteApnsChannel(
            this.ops["DeleteApnsChannel"].apply(partialParams)
        );
    }

    invokeDeleteApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest]: (DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest)[K]
    }>): DeleteApnsSandboxChannelResponse {
        return this.client.deleteApnsSandboxChannel(
            this.ops["DeleteApnsSandboxChannel"].apply(partialParams)
        );
    }

    invokeDeleteApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest]: (DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest)[K]
    }>): DeleteApnsVoipChannelResponse {
        return this.client.deleteApnsVoipChannel(
            this.ops["DeleteApnsVoipChannel"].apply(partialParams)
        );
    }

    invokeDeleteApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest]: (DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest)[K]
    }>): DeleteApnsVoipSandboxChannelResponse {
        return this.client.deleteApnsVoipSandboxChannel(
            this.ops["DeleteApnsVoipSandboxChannel"].apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): DeleteAppResponse {
        return this.client.deleteApp(
            this.ops["DeleteApp"].apply(partialParams)
        );
    }

    invokeDeleteBaiduChannel(partialParams: ToOptional<{
      [K in keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest]: (DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest)[K]
    }>): DeleteBaiduChannelResponse {
        return this.client.deleteBaiduChannel(
            this.ops["DeleteBaiduChannel"].apply(partialParams)
        );
    }

    invokeDeleteCampaign(partialParams: ToOptional<{
      [K in keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest]: (DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest)[K]
    }>): DeleteCampaignResponse {
        return this.client.deleteCampaign(
            this.ops["DeleteCampaign"].apply(partialParams)
        );
    }

    invokeDeleteEmailChannel(partialParams: ToOptional<{
      [K in keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest]: (DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest)[K]
    }>): DeleteEmailChannelResponse {
        return this.client.deleteEmailChannel(
            this.ops["DeleteEmailChannel"].apply(partialParams)
        );
    }

    invokeDeleteEmailTemplate(partialParams: ToOptional<{
      [K in keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest]: (DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest)[K]
    }>): DeleteEmailTemplateResponse {
        return this.client.deleteEmailTemplate(
            this.ops["DeleteEmailTemplate"].apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest]: (DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest)[K]
    }>): DeleteEndpointResponse {
        return this.client.deleteEndpoint(
            this.ops["DeleteEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteEventStream(partialParams: ToOptional<{
      [K in keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest]: (DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest)[K]
    }>): DeleteEventStreamResponse {
        return this.client.deleteEventStream(
            this.ops["DeleteEventStream"].apply(partialParams)
        );
    }

    invokeDeleteGcmChannel(partialParams: ToOptional<{
      [K in keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest]: (DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest)[K]
    }>): DeleteGcmChannelResponse {
        return this.client.deleteGcmChannel(
            this.ops["DeleteGcmChannel"].apply(partialParams)
        );
    }

    invokeDeleteInAppTemplate(partialParams: ToOptional<{
      [K in keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest]: (DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest)[K]
    }>): DeleteInAppTemplateResponse {
        return this.client.deleteInAppTemplate(
            this.ops["DeleteInAppTemplate"].apply(partialParams)
        );
    }

    invokeDeleteJourney(partialParams: ToOptional<{
      [K in keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest]: (DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest)[K]
    }>): DeleteJourneyResponse {
        return this.client.deleteJourney(
            this.ops["DeleteJourney"].apply(partialParams)
        );
    }

    invokeDeletePushTemplate(partialParams: ToOptional<{
      [K in keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest]: (DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest)[K]
    }>): DeletePushTemplateResponse {
        return this.client.deletePushTemplate(
            this.ops["DeletePushTemplate"].apply(partialParams)
        );
    }

    invokeDeleteRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest]: (DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest)[K]
    }>): DeleteRecommenderConfigurationResponse {
        return this.client.deleteRecommenderConfiguration(
            this.ops["DeleteRecommenderConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteSegment(partialParams: ToOptional<{
      [K in keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest]: (DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest)[K]
    }>): DeleteSegmentResponse {
        return this.client.deleteSegment(
            this.ops["DeleteSegment"].apply(partialParams)
        );
    }

    invokeDeleteSmsChannel(partialParams: ToOptional<{
      [K in keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest]: (DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest)[K]
    }>): DeleteSmsChannelResponse {
        return this.client.deleteSmsChannel(
            this.ops["DeleteSmsChannel"].apply(partialParams)
        );
    }

    invokeDeleteSmsTemplate(partialParams: ToOptional<{
      [K in keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest]: (DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest)[K]
    }>): DeleteSmsTemplateResponse {
        return this.client.deleteSmsTemplate(
            this.ops["DeleteSmsTemplate"].apply(partialParams)
        );
    }

    invokeDeleteUserEndpoints(partialParams: ToOptional<{
      [K in keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest]: (DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest)[K]
    }>): DeleteUserEndpointsResponse {
        return this.client.deleteUserEndpoints(
            this.ops["DeleteUserEndpoints"].apply(partialParams)
        );
    }

    invokeDeleteVoiceChannel(partialParams: ToOptional<{
      [K in keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest]: (DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest)[K]
    }>): DeleteVoiceChannelResponse {
        return this.client.deleteVoiceChannel(
            this.ops["DeleteVoiceChannel"].apply(partialParams)
        );
    }

    invokeDeleteVoiceTemplate(partialParams: ToOptional<{
      [K in keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest]: (DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest)[K]
    }>): DeleteVoiceTemplateResponse {
        return this.client.deleteVoiceTemplate(
            this.ops["DeleteVoiceTemplate"].apply(partialParams)
        );
    }

    invokeGetAdmChannel(partialParams: ToOptional<{
      [K in keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest]: (GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest)[K]
    }>): GetAdmChannelResponse {
        return this.client.getAdmChannel(
            this.ops["GetAdmChannel"].apply(partialParams)
        );
    }

    invokeGetApnsChannel(partialParams: ToOptional<{
      [K in keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest]: (GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest)[K]
    }>): GetApnsChannelResponse {
        return this.client.getApnsChannel(
            this.ops["GetApnsChannel"].apply(partialParams)
        );
    }

    invokeGetApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest]: (GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest)[K]
    }>): GetApnsSandboxChannelResponse {
        return this.client.getApnsSandboxChannel(
            this.ops["GetApnsSandboxChannel"].apply(partialParams)
        );
    }

    invokeGetApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest]: (GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest)[K]
    }>): GetApnsVoipChannelResponse {
        return this.client.getApnsVoipChannel(
            this.ops["GetApnsVoipChannel"].apply(partialParams)
        );
    }

    invokeGetApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest]: (GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest)[K]
    }>): GetApnsVoipSandboxChannelResponse {
        return this.client.getApnsVoipSandboxChannel(
            this.ops["GetApnsVoipSandboxChannel"].apply(partialParams)
        );
    }

    invokeGetApp(partialParams: ToOptional<{
      [K in keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest]: (GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest)[K]
    }>): GetAppResponse {
        return this.client.getApp(
            this.ops["GetApp"].apply(partialParams)
        );
    }

    invokeGetApplicationDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest]: (GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest)[K]
    }>): GetApplicationDateRangeKpiResponse {
        return this.client.getApplicationDateRangeKpi(
            this.ops["GetApplicationDateRangeKpi"].apply(partialParams)
        );
    }

    invokeGetApplicationSettings(partialParams: ToOptional<{
      [K in keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest]: (GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest)[K]
    }>): GetApplicationSettingsResponse {
        return this.client.getApplicationSettings(
            this.ops["GetApplicationSettings"].apply(partialParams)
        );
    }

    invokeGetBaiduChannel(partialParams: ToOptional<{
      [K in keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest]: (GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest)[K]
    }>): GetBaiduChannelResponse {
        return this.client.getBaiduChannel(
            this.ops["GetBaiduChannel"].apply(partialParams)
        );
    }

    invokeGetCampaign(partialParams: ToOptional<{
      [K in keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest]: (GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest)[K]
    }>): GetCampaignResponse {
        return this.client.getCampaign(
            this.ops["GetCampaign"].apply(partialParams)
        );
    }

    invokeGetCampaignActivities(partialParams: ToOptional<{
      [K in keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest]: (GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest)[K]
    }>): GetCampaignActivitiesResponse {
        return this.client.getCampaignActivities(
            this.ops["GetCampaignActivities"].apply(partialParams)
        );
    }

    invokeGetCampaignDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest]: (GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest)[K]
    }>): GetCampaignDateRangeKpiResponse {
        return this.client.getCampaignDateRangeKpi(
            this.ops["GetCampaignDateRangeKpi"].apply(partialParams)
        );
    }

    invokeGetCampaignVersion(partialParams: ToOptional<{
      [K in keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest]: (GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest)[K]
    }>): GetCampaignVersionResponse {
        return this.client.getCampaignVersion(
            this.ops["GetCampaignVersion"].apply(partialParams)
        );
    }

    invokeGetCampaignVersions(partialParams: ToOptional<{
      [K in keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest]: (GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest)[K]
    }>): GetCampaignVersionsResponse {
        return this.client.getCampaignVersions(
            this.ops["GetCampaignVersions"].apply(partialParams)
        );
    }

    invokeGetCampaigns(partialParams: ToOptional<{
      [K in keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest]: (GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest)[K]
    }>): GetCampaignsResponse {
        return this.client.getCampaigns(
            this.ops["GetCampaigns"].apply(partialParams)
        );
    }

    invokeGetChannels(partialParams: ToOptional<{
      [K in keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest]: (GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest)[K]
    }>): GetChannelsResponse {
        return this.client.getChannels(
            this.ops["GetChannels"].apply(partialParams)
        );
    }

    invokeGetEmailChannel(partialParams: ToOptional<{
      [K in keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest]: (GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest)[K]
    }>): GetEmailChannelResponse {
        return this.client.getEmailChannel(
            this.ops["GetEmailChannel"].apply(partialParams)
        );
    }

    invokeGetEmailTemplate(partialParams: ToOptional<{
      [K in keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest]: (GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest)[K]
    }>): GetEmailTemplateResponse {
        return this.client.getEmailTemplate(
            this.ops["GetEmailTemplate"].apply(partialParams)
        );
    }

    invokeGetEndpoint(partialParams: ToOptional<{
      [K in keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest]: (GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest)[K]
    }>): GetEndpointResponse {
        return this.client.getEndpoint(
            this.ops["GetEndpoint"].apply(partialParams)
        );
    }

    invokeGetEventStream(partialParams: ToOptional<{
      [K in keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest]: (GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest)[K]
    }>): GetEventStreamResponse {
        return this.client.getEventStream(
            this.ops["GetEventStream"].apply(partialParams)
        );
    }

    invokeGetExportJob(partialParams: ToOptional<{
      [K in keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest]: (GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest)[K]
    }>): GetExportJobResponse {
        return this.client.getExportJob(
            this.ops["GetExportJob"].apply(partialParams)
        );
    }

    invokeGetExportJobs(partialParams: ToOptional<{
      [K in keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest]: (GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest)[K]
    }>): GetExportJobsResponse {
        return this.client.getExportJobs(
            this.ops["GetExportJobs"].apply(partialParams)
        );
    }

    invokeGetGcmChannel(partialParams: ToOptional<{
      [K in keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest]: (GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest)[K]
    }>): GetGcmChannelResponse {
        return this.client.getGcmChannel(
            this.ops["GetGcmChannel"].apply(partialParams)
        );
    }

    invokeGetImportJob(partialParams: ToOptional<{
      [K in keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest]: (GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest)[K]
    }>): GetImportJobResponse {
        return this.client.getImportJob(
            this.ops["GetImportJob"].apply(partialParams)
        );
    }

    invokeGetImportJobs(partialParams: ToOptional<{
      [K in keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest]: (GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest)[K]
    }>): GetImportJobsResponse {
        return this.client.getImportJobs(
            this.ops["GetImportJobs"].apply(partialParams)
        );
    }

    invokeGetInAppMessages(partialParams: ToOptional<{
      [K in keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest]: (GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest)[K]
    }>): GetInAppMessagesResponse {
        return this.client.getInAppMessages(
            this.ops["GetInAppMessages"].apply(partialParams)
        );
    }

    invokeGetInAppTemplate(partialParams: ToOptional<{
      [K in keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest]: (GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest)[K]
    }>): GetInAppTemplateResponse {
        return this.client.getInAppTemplate(
            this.ops["GetInAppTemplate"].apply(partialParams)
        );
    }

    invokeGetJourney(partialParams: ToOptional<{
      [K in keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest]: (GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest)[K]
    }>): GetJourneyResponse {
        return this.client.getJourney(
            this.ops["GetJourney"].apply(partialParams)
        );
    }

    invokeGetJourneyDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest]: (GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest)[K]
    }>): GetJourneyDateRangeKpiResponse {
        return this.client.getJourneyDateRangeKpi(
            this.ops["GetJourneyDateRangeKpi"].apply(partialParams)
        );
    }

    invokeGetJourneyExecutionActivityMetrics(partialParams: ToOptional<{
      [K in keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest]: (GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest)[K]
    }>): GetJourneyExecutionActivityMetricsResponse {
        return this.client.getJourneyExecutionActivityMetrics(
            this.ops["GetJourneyExecutionActivityMetrics"].apply(partialParams)
        );
    }

    invokeGetJourneyExecutionMetrics(partialParams: ToOptional<{
      [K in keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest]: (GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest)[K]
    }>): GetJourneyExecutionMetricsResponse {
        return this.client.getJourneyExecutionMetrics(
            this.ops["GetJourneyExecutionMetrics"].apply(partialParams)
        );
    }

    invokeGetPushTemplate(partialParams: ToOptional<{
      [K in keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest]: (GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest)[K]
    }>): GetPushTemplateResponse {
        return this.client.getPushTemplate(
            this.ops["GetPushTemplate"].apply(partialParams)
        );
    }

    invokeGetRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest]: (GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest)[K]
    }>): GetRecommenderConfigurationResponse {
        return this.client.getRecommenderConfiguration(
            this.ops["GetRecommenderConfiguration"].apply(partialParams)
        );
    }

    invokeGetSegment(partialParams: ToOptional<{
      [K in keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest]: (GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest)[K]
    }>): GetSegmentResponse {
        return this.client.getSegment(
            this.ops["GetSegment"].apply(partialParams)
        );
    }

    invokeGetSegmentExportJobs(partialParams: ToOptional<{
      [K in keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest]: (GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest)[K]
    }>): GetSegmentExportJobsResponse {
        return this.client.getSegmentExportJobs(
            this.ops["GetSegmentExportJobs"].apply(partialParams)
        );
    }

    invokeGetSegmentImportJobs(partialParams: ToOptional<{
      [K in keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest]: (GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest)[K]
    }>): GetSegmentImportJobsResponse {
        return this.client.getSegmentImportJobs(
            this.ops["GetSegmentImportJobs"].apply(partialParams)
        );
    }

    invokeGetSegmentVersion(partialParams: ToOptional<{
      [K in keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest]: (GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest)[K]
    }>): GetSegmentVersionResponse {
        return this.client.getSegmentVersion(
            this.ops["GetSegmentVersion"].apply(partialParams)
        );
    }

    invokeGetSegmentVersions(partialParams: ToOptional<{
      [K in keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest]: (GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest)[K]
    }>): GetSegmentVersionsResponse {
        return this.client.getSegmentVersions(
            this.ops["GetSegmentVersions"].apply(partialParams)
        );
    }

    invokeGetSegments(partialParams: ToOptional<{
      [K in keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest]: (GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest)[K]
    }>): GetSegmentsResponse {
        return this.client.getSegments(
            this.ops["GetSegments"].apply(partialParams)
        );
    }

    invokeGetSmsChannel(partialParams: ToOptional<{
      [K in keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest]: (GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest)[K]
    }>): GetSmsChannelResponse {
        return this.client.getSmsChannel(
            this.ops["GetSmsChannel"].apply(partialParams)
        );
    }

    invokeGetSmsTemplate(partialParams: ToOptional<{
      [K in keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest]: (GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest)[K]
    }>): GetSmsTemplateResponse {
        return this.client.getSmsTemplate(
            this.ops["GetSmsTemplate"].apply(partialParams)
        );
    }

    invokeGetUserEndpoints(partialParams: ToOptional<{
      [K in keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest]: (GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest)[K]
    }>): GetUserEndpointsResponse {
        return this.client.getUserEndpoints(
            this.ops["GetUserEndpoints"].apply(partialParams)
        );
    }

    invokeGetVoiceChannel(partialParams: ToOptional<{
      [K in keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest]: (GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest)[K]
    }>): GetVoiceChannelResponse {
        return this.client.getVoiceChannel(
            this.ops["GetVoiceChannel"].apply(partialParams)
        );
    }

    invokeGetVoiceTemplate(partialParams: ToOptional<{
      [K in keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest]: (GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest)[K]
    }>): GetVoiceTemplateResponse {
        return this.client.getVoiceTemplate(
            this.ops["GetVoiceTemplate"].apply(partialParams)
        );
    }

    invokeListJourneys(partialParams: ToOptional<{
      [K in keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest]: (ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest)[K]
    }>): ListJourneysResponse {
        return this.client.listJourneys(
            this.ops["ListJourneys"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest]: (ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest)[K]
    }>): ListTemplateVersionsResponse {
        return this.client.listTemplateVersions(
            this.ops["ListTemplateVersions"].apply(partialParams)
        );
    }

    invokePhoneNumberValidate(partialParams: ToOptional<{
      [K in keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest]: (PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest)[K]
    }>): PhoneNumberValidateResponse {
        return this.client.phoneNumberValidate(
            this.ops["PhoneNumberValidate"].apply(partialParams)
        );
    }

    invokePutEventStream(partialParams: ToOptional<{
      [K in keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest]: (PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest)[K]
    }>): PutEventStreamResponse {
        return this.client.putEventStream(
            this.ops["PutEventStream"].apply(partialParams)
        );
    }

    invokePutEvents(partialParams: ToOptional<{
      [K in keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest]: (PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest)[K]
    }>): PutEventsResponse {
        return this.client.putEvents(
            this.ops["PutEvents"].apply(partialParams)
        );
    }

    invokeRemoveAttributes(partialParams: ToOptional<{
      [K in keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest]: (RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest)[K]
    }>): RemoveAttributesResponse {
        return this.client.removeAttributes(
            this.ops["RemoveAttributes"].apply(partialParams)
        );
    }

    invokeSendMessages(partialParams: ToOptional<{
      [K in keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest]: (SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest)[K]
    }>): SendMessagesResponse {
        return this.client.sendMessages(
            this.ops["SendMessages"].apply(partialParams)
        );
    }

    invokeSendOTPMessage(partialParams: ToOptional<{
      [K in keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest]: (SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest)[K]
    }>): SendOTPMessageResponse {
        return this.client.sendOTPMessage(
            this.ops["SendOTPMessage"].apply(partialParams)
        );
    }

    invokeSendUsersMessages(partialParams: ToOptional<{
      [K in keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest]: (SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest)[K]
    }>): SendUsersMessagesResponse {
        return this.client.sendUsersMessages(
            this.ops["SendUsersMessages"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAdmChannel(partialParams: ToOptional<{
      [K in keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest]: (UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest)[K]
    }>): UpdateAdmChannelResponse {
        return this.client.updateAdmChannel(
            this.ops["UpdateAdmChannel"].apply(partialParams)
        );
    }

    invokeUpdateApnsChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest]: (UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest)[K]
    }>): UpdateApnsChannelResponse {
        return this.client.updateApnsChannel(
            this.ops["UpdateApnsChannel"].apply(partialParams)
        );
    }

    invokeUpdateApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest]: (UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest)[K]
    }>): UpdateApnsSandboxChannelResponse {
        return this.client.updateApnsSandboxChannel(
            this.ops["UpdateApnsSandboxChannel"].apply(partialParams)
        );
    }

    invokeUpdateApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest]: (UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest)[K]
    }>): UpdateApnsVoipChannelResponse {
        return this.client.updateApnsVoipChannel(
            this.ops["UpdateApnsVoipChannel"].apply(partialParams)
        );
    }

    invokeUpdateApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest]: (UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest)[K]
    }>): UpdateApnsVoipSandboxChannelResponse {
        return this.client.updateApnsVoipSandboxChannel(
            this.ops["UpdateApnsVoipSandboxChannel"].apply(partialParams)
        );
    }

    invokeUpdateApplicationSettings(partialParams: ToOptional<{
      [K in keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest]: (UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest)[K]
    }>): UpdateApplicationSettingsResponse {
        return this.client.updateApplicationSettings(
            this.ops["UpdateApplicationSettings"].apply(partialParams)
        );
    }

    invokeUpdateBaiduChannel(partialParams: ToOptional<{
      [K in keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest]: (UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest)[K]
    }>): UpdateBaiduChannelResponse {
        return this.client.updateBaiduChannel(
            this.ops["UpdateBaiduChannel"].apply(partialParams)
        );
    }

    invokeUpdateCampaign(partialParams: ToOptional<{
      [K in keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest]: (UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest)[K]
    }>): UpdateCampaignResponse {
        return this.client.updateCampaign(
            this.ops["UpdateCampaign"].apply(partialParams)
        );
    }

    invokeUpdateEmailChannel(partialParams: ToOptional<{
      [K in keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest]: (UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest)[K]
    }>): UpdateEmailChannelResponse {
        return this.client.updateEmailChannel(
            this.ops["UpdateEmailChannel"].apply(partialParams)
        );
    }

    invokeUpdateEmailTemplate(partialParams: ToOptional<{
      [K in keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest]: (UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest)[K]
    }>): UpdateEmailTemplateResponse {
        return this.client.updateEmailTemplate(
            this.ops["UpdateEmailTemplate"].apply(partialParams)
        );
    }

    invokeUpdateEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest]: (UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest)[K]
    }>): UpdateEndpointResponse {
        return this.client.updateEndpoint(
            this.ops["UpdateEndpoint"].apply(partialParams)
        );
    }

    invokeUpdateEndpointsBatch(partialParams: ToOptional<{
      [K in keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest]: (UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest)[K]
    }>): UpdateEndpointsBatchResponse {
        return this.client.updateEndpointsBatch(
            this.ops["UpdateEndpointsBatch"].apply(partialParams)
        );
    }

    invokeUpdateGcmChannel(partialParams: ToOptional<{
      [K in keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest]: (UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest)[K]
    }>): UpdateGcmChannelResponse {
        return this.client.updateGcmChannel(
            this.ops["UpdateGcmChannel"].apply(partialParams)
        );
    }

    invokeUpdateInAppTemplate(partialParams: ToOptional<{
      [K in keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest]: (UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest)[K]
    }>): UpdateInAppTemplateResponse {
        return this.client.updateInAppTemplate(
            this.ops["UpdateInAppTemplate"].apply(partialParams)
        );
    }

    invokeUpdateJourney(partialParams: ToOptional<{
      [K in keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest]: (UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest)[K]
    }>): UpdateJourneyResponse {
        return this.client.updateJourney(
            this.ops["UpdateJourney"].apply(partialParams)
        );
    }

    invokeUpdateJourneyState(partialParams: ToOptional<{
      [K in keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest]: (UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest)[K]
    }>): UpdateJourneyStateResponse {
        return this.client.updateJourneyState(
            this.ops["UpdateJourneyState"].apply(partialParams)
        );
    }

    invokeUpdatePushTemplate(partialParams: ToOptional<{
      [K in keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest]: (UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest)[K]
    }>): UpdatePushTemplateResponse {
        return this.client.updatePushTemplate(
            this.ops["UpdatePushTemplate"].apply(partialParams)
        );
    }

    invokeUpdateRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest]: (UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest)[K]
    }>): UpdateRecommenderConfigurationResponse {
        return this.client.updateRecommenderConfiguration(
            this.ops["UpdateRecommenderConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateSegment(partialParams: ToOptional<{
      [K in keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest]: (UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest)[K]
    }>): UpdateSegmentResponse {
        return this.client.updateSegment(
            this.ops["UpdateSegment"].apply(partialParams)
        );
    }

    invokeUpdateSmsChannel(partialParams: ToOptional<{
      [K in keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest]: (UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest)[K]
    }>): UpdateSmsChannelResponse {
        return this.client.updateSmsChannel(
            this.ops["UpdateSmsChannel"].apply(partialParams)
        );
    }

    invokeUpdateSmsTemplate(partialParams: ToOptional<{
      [K in keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest]: (UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest)[K]
    }>): UpdateSmsTemplateResponse {
        return this.client.updateSmsTemplate(
            this.ops["UpdateSmsTemplate"].apply(partialParams)
        );
    }

    invokeUpdateTemplateActiveVersion(partialParams: ToOptional<{
      [K in keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest]: (UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest)[K]
    }>): UpdateTemplateActiveVersionResponse {
        return this.client.updateTemplateActiveVersion(
            this.ops["UpdateTemplateActiveVersion"].apply(partialParams)
        );
    }

    invokeUpdateVoiceChannel(partialParams: ToOptional<{
      [K in keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest]: (UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest)[K]
    }>): UpdateVoiceChannelResponse {
        return this.client.updateVoiceChannel(
            this.ops["UpdateVoiceChannel"].apply(partialParams)
        );
    }

    invokeUpdateVoiceTemplate(partialParams: ToOptional<{
      [K in keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest]: (UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest)[K]
    }>): UpdateVoiceTemplateResponse {
        return this.client.updateVoiceTemplate(
            this.ops["UpdateVoiceTemplate"].apply(partialParams)
        );
    }

    invokeVerifyOTPMessage(partialParams: ToOptional<{
      [K in keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest]: (VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest)[K]
    }>): VerifyOTPMessageResponse {
        return this.client.verifyOTPMessage(
            this.ops["VerifyOTPMessage"].apply(partialParams)
        );
    }
}