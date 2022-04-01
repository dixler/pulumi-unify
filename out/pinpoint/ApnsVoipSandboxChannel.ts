
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    GetAppsRequest,
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
    GetRecommenderConfigurationsRequest,
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
    ListTemplatesRequest,
    PhoneNumberValidateRequest,
    PutEventStreamRequest,
    PutEventsRequest,
    RemoveAttributesRequest,
    SendMessagesRequest,
    SendOTPMessageRequest,
    SendUsersMessagesRequest,
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
    GetAppsResponse,
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
    GetRecommenderConfigurationsResponse,
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
    ListTemplatesResponse,
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
const schema = require("../apis/pinpoint-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.pinpoint.ApnsVoipSandboxChannel {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.pinpoint.ApnsVoipSandboxChannel>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Pinpoint()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
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

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest]: (CreateAppRequest)[K]
    }>): Request<CreateAppResponse, AWSError> {
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateCampaign(partialParams: ToOptional<{
      [K in keyof CreateCampaignRequest & keyof Omit<CreateCampaignRequest, "ApplicationId">]: (CreateCampaignRequest)[K]
    }>): Request<CreateCampaignResponse, AWSError> {
        this.boot();
        return this.client.createCampaign(
          this.ops["CreateCampaign"].apply(partialParams)
        );
    }

    invokeCreateEmailTemplate(partialParams: ToOptional<{
      [K in keyof CreateEmailTemplateRequest]: (CreateEmailTemplateRequest)[K]
    }>): Request<CreateEmailTemplateResponse, AWSError> {
        this.boot();
        return this.client.createEmailTemplate(
          this.ops["CreateEmailTemplate"].apply(partialParams)
        );
    }

    invokeCreateExportJob(partialParams: ToOptional<{
      [K in keyof CreateExportJobRequest & keyof Omit<CreateExportJobRequest, "ApplicationId">]: (CreateExportJobRequest)[K]
    }>): Request<CreateExportJobResponse, AWSError> {
        this.boot();
        return this.client.createExportJob(
          this.ops["CreateExportJob"].apply(partialParams)
        );
    }

    invokeCreateImportJob(partialParams: ToOptional<{
      [K in keyof CreateImportJobRequest & keyof Omit<CreateImportJobRequest, "ApplicationId">]: (CreateImportJobRequest)[K]
    }>): Request<CreateImportJobResponse, AWSError> {
        this.boot();
        return this.client.createImportJob(
          this.ops["CreateImportJob"].apply(partialParams)
        );
    }

    invokeCreateInAppTemplate(partialParams: ToOptional<{
      [K in keyof CreateInAppTemplateRequest]: (CreateInAppTemplateRequest)[K]
    }>): Request<CreateInAppTemplateResponse, AWSError> {
        this.boot();
        return this.client.createInAppTemplate(
          this.ops["CreateInAppTemplate"].apply(partialParams)
        );
    }

    invokeCreateJourney(partialParams: ToOptional<{
      [K in keyof CreateJourneyRequest & keyof Omit<CreateJourneyRequest, "ApplicationId">]: (CreateJourneyRequest)[K]
    }>): Request<CreateJourneyResponse, AWSError> {
        this.boot();
        return this.client.createJourney(
          this.ops["CreateJourney"].apply(partialParams)
        );
    }

    invokeCreatePushTemplate(partialParams: ToOptional<{
      [K in keyof CreatePushTemplateRequest]: (CreatePushTemplateRequest)[K]
    }>): Request<CreatePushTemplateResponse, AWSError> {
        this.boot();
        return this.client.createPushTemplate(
          this.ops["CreatePushTemplate"].apply(partialParams)
        );
    }

    invokeCreateRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof CreateRecommenderConfigurationRequest]: (CreateRecommenderConfigurationRequest)[K]
    }>): Request<CreateRecommenderConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createRecommenderConfiguration(
          this.ops["CreateRecommenderConfiguration"].apply(partialParams)
        );
    }

    invokeCreateSegment(partialParams: ToOptional<{
      [K in keyof CreateSegmentRequest & keyof Omit<CreateSegmentRequest, "ApplicationId">]: (CreateSegmentRequest)[K]
    }>): Request<CreateSegmentResponse, AWSError> {
        this.boot();
        return this.client.createSegment(
          this.ops["CreateSegment"].apply(partialParams)
        );
    }

    invokeCreateSmsTemplate(partialParams: ToOptional<{
      [K in keyof CreateSmsTemplateRequest]: (CreateSmsTemplateRequest)[K]
    }>): Request<CreateSmsTemplateResponse, AWSError> {
        this.boot();
        return this.client.createSmsTemplate(
          this.ops["CreateSmsTemplate"].apply(partialParams)
        );
    }

    invokeCreateVoiceTemplate(partialParams: ToOptional<{
      [K in keyof CreateVoiceTemplateRequest]: (CreateVoiceTemplateRequest)[K]
    }>): Request<CreateVoiceTemplateResponse, AWSError> {
        this.boot();
        return this.client.createVoiceTemplate(
          this.ops["CreateVoiceTemplate"].apply(partialParams)
        );
    }

    invokeDeleteAdmChannel(partialParams: ToOptional<{
      [K in keyof DeleteAdmChannelRequest & keyof Omit<DeleteAdmChannelRequest, "ApplicationId">]: (DeleteAdmChannelRequest)[K]
    }>): Request<DeleteAdmChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteAdmChannel(
          this.ops["DeleteAdmChannel"].apply(partialParams)
        );
    }

    invokeDeleteApnsChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsChannelRequest & keyof Omit<DeleteApnsChannelRequest, "ApplicationId">]: (DeleteApnsChannelRequest)[K]
    }>): Request<DeleteApnsChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteApnsChannel(
          this.ops["DeleteApnsChannel"].apply(partialParams)
        );
    }

    invokeDeleteApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsSandboxChannelRequest & keyof Omit<DeleteApnsSandboxChannelRequest, "ApplicationId">]: (DeleteApnsSandboxChannelRequest)[K]
    }>): Request<DeleteApnsSandboxChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteApnsSandboxChannel(
          this.ops["DeleteApnsSandboxChannel"].apply(partialParams)
        );
    }

    invokeDeleteApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsVoipChannelRequest & keyof Omit<DeleteApnsVoipChannelRequest, "ApplicationId">]: (DeleteApnsVoipChannelRequest)[K]
    }>): Request<DeleteApnsVoipChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteApnsVoipChannel(
          this.ops["DeleteApnsVoipChannel"].apply(partialParams)
        );
    }

    invokeDeleteApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsVoipSandboxChannelRequest & keyof Omit<DeleteApnsVoipSandboxChannelRequest, "ApplicationId">]: (DeleteApnsVoipSandboxChannelRequest)[K]
    }>): Request<DeleteApnsVoipSandboxChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteApnsVoipSandboxChannel(
          this.ops["DeleteApnsVoipSandboxChannel"].apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof Omit<DeleteAppRequest, "ApplicationId">]: (DeleteAppRequest)[K]
    }>): Request<DeleteAppResponse, AWSError> {
        this.boot();
        return this.client.deleteApp(
          this.ops["DeleteApp"].apply(partialParams)
        );
    }

    invokeDeleteBaiduChannel(partialParams: ToOptional<{
      [K in keyof DeleteBaiduChannelRequest & keyof Omit<DeleteBaiduChannelRequest, "ApplicationId">]: (DeleteBaiduChannelRequest)[K]
    }>): Request<DeleteBaiduChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteBaiduChannel(
          this.ops["DeleteBaiduChannel"].apply(partialParams)
        );
    }

    invokeDeleteCampaign(partialParams: ToOptional<{
      [K in keyof DeleteCampaignRequest & keyof Omit<DeleteCampaignRequest, "ApplicationId">]: (DeleteCampaignRequest)[K]
    }>): Request<DeleteCampaignResponse, AWSError> {
        this.boot();
        return this.client.deleteCampaign(
          this.ops["DeleteCampaign"].apply(partialParams)
        );
    }

    invokeDeleteEmailChannel(partialParams: ToOptional<{
      [K in keyof DeleteEmailChannelRequest & keyof Omit<DeleteEmailChannelRequest, "ApplicationId">]: (DeleteEmailChannelRequest)[K]
    }>): Request<DeleteEmailChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteEmailChannel(
          this.ops["DeleteEmailChannel"].apply(partialParams)
        );
    }

    invokeDeleteEmailTemplate(partialParams: ToOptional<{
      [K in keyof DeleteEmailTemplateRequest]: (DeleteEmailTemplateRequest)[K]
    }>): Request<DeleteEmailTemplateResponse, AWSError> {
        this.boot();
        return this.client.deleteEmailTemplate(
          this.ops["DeleteEmailTemplate"].apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointRequest & keyof Omit<DeleteEndpointRequest, "ApplicationId">]: (DeleteEndpointRequest)[K]
    }>): Request<DeleteEndpointResponse, AWSError> {
        this.boot();
        return this.client.deleteEndpoint(
          this.ops["DeleteEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteEventStream(partialParams: ToOptional<{
      [K in keyof DeleteEventStreamRequest & keyof Omit<DeleteEventStreamRequest, "ApplicationId">]: (DeleteEventStreamRequest)[K]
    }>): Request<DeleteEventStreamResponse, AWSError> {
        this.boot();
        return this.client.deleteEventStream(
          this.ops["DeleteEventStream"].apply(partialParams)
        );
    }

    invokeDeleteGcmChannel(partialParams: ToOptional<{
      [K in keyof DeleteGcmChannelRequest & keyof Omit<DeleteGcmChannelRequest, "ApplicationId">]: (DeleteGcmChannelRequest)[K]
    }>): Request<DeleteGcmChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteGcmChannel(
          this.ops["DeleteGcmChannel"].apply(partialParams)
        );
    }

    invokeDeleteInAppTemplate(partialParams: ToOptional<{
      [K in keyof DeleteInAppTemplateRequest]: (DeleteInAppTemplateRequest)[K]
    }>): Request<DeleteInAppTemplateResponse, AWSError> {
        this.boot();
        return this.client.deleteInAppTemplate(
          this.ops["DeleteInAppTemplate"].apply(partialParams)
        );
    }

    invokeDeleteJourney(partialParams: ToOptional<{
      [K in keyof DeleteJourneyRequest & keyof Omit<DeleteJourneyRequest, "ApplicationId">]: (DeleteJourneyRequest)[K]
    }>): Request<DeleteJourneyResponse, AWSError> {
        this.boot();
        return this.client.deleteJourney(
          this.ops["DeleteJourney"].apply(partialParams)
        );
    }

    invokeDeletePushTemplate(partialParams: ToOptional<{
      [K in keyof DeletePushTemplateRequest]: (DeletePushTemplateRequest)[K]
    }>): Request<DeletePushTemplateResponse, AWSError> {
        this.boot();
        return this.client.deletePushTemplate(
          this.ops["DeletePushTemplate"].apply(partialParams)
        );
    }

    invokeDeleteRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteRecommenderConfigurationRequest]: (DeleteRecommenderConfigurationRequest)[K]
    }>): Request<DeleteRecommenderConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteRecommenderConfiguration(
          this.ops["DeleteRecommenderConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteSegment(partialParams: ToOptional<{
      [K in keyof DeleteSegmentRequest & keyof Omit<DeleteSegmentRequest, "ApplicationId">]: (DeleteSegmentRequest)[K]
    }>): Request<DeleteSegmentResponse, AWSError> {
        this.boot();
        return this.client.deleteSegment(
          this.ops["DeleteSegment"].apply(partialParams)
        );
    }

    invokeDeleteSmsChannel(partialParams: ToOptional<{
      [K in keyof DeleteSmsChannelRequest & keyof Omit<DeleteSmsChannelRequest, "ApplicationId">]: (DeleteSmsChannelRequest)[K]
    }>): Request<DeleteSmsChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteSmsChannel(
          this.ops["DeleteSmsChannel"].apply(partialParams)
        );
    }

    invokeDeleteSmsTemplate(partialParams: ToOptional<{
      [K in keyof DeleteSmsTemplateRequest]: (DeleteSmsTemplateRequest)[K]
    }>): Request<DeleteSmsTemplateResponse, AWSError> {
        this.boot();
        return this.client.deleteSmsTemplate(
          this.ops["DeleteSmsTemplate"].apply(partialParams)
        );
    }

    invokeDeleteUserEndpoints(partialParams: ToOptional<{
      [K in keyof DeleteUserEndpointsRequest & keyof Omit<DeleteUserEndpointsRequest, "ApplicationId">]: (DeleteUserEndpointsRequest)[K]
    }>): Request<DeleteUserEndpointsResponse, AWSError> {
        this.boot();
        return this.client.deleteUserEndpoints(
          this.ops["DeleteUserEndpoints"].apply(partialParams)
        );
    }

    invokeDeleteVoiceChannel(partialParams: ToOptional<{
      [K in keyof DeleteVoiceChannelRequest & keyof Omit<DeleteVoiceChannelRequest, "ApplicationId">]: (DeleteVoiceChannelRequest)[K]
    }>): Request<DeleteVoiceChannelResponse, AWSError> {
        this.boot();
        return this.client.deleteVoiceChannel(
          this.ops["DeleteVoiceChannel"].apply(partialParams)
        );
    }

    invokeDeleteVoiceTemplate(partialParams: ToOptional<{
      [K in keyof DeleteVoiceTemplateRequest]: (DeleteVoiceTemplateRequest)[K]
    }>): Request<DeleteVoiceTemplateResponse, AWSError> {
        this.boot();
        return this.client.deleteVoiceTemplate(
          this.ops["DeleteVoiceTemplate"].apply(partialParams)
        );
    }

    invokeGetAdmChannel(partialParams: ToOptional<{
      [K in keyof GetAdmChannelRequest & keyof Omit<GetAdmChannelRequest, "ApplicationId">]: (GetAdmChannelRequest)[K]
    }>): Request<GetAdmChannelResponse, AWSError> {
        this.boot();
        return this.client.getAdmChannel(
          this.ops["GetAdmChannel"].apply(partialParams)
        );
    }

    invokeGetApnsChannel(partialParams: ToOptional<{
      [K in keyof GetApnsChannelRequest & keyof Omit<GetApnsChannelRequest, "ApplicationId">]: (GetApnsChannelRequest)[K]
    }>): Request<GetApnsChannelResponse, AWSError> {
        this.boot();
        return this.client.getApnsChannel(
          this.ops["GetApnsChannel"].apply(partialParams)
        );
    }

    invokeGetApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof GetApnsSandboxChannelRequest & keyof Omit<GetApnsSandboxChannelRequest, "ApplicationId">]: (GetApnsSandboxChannelRequest)[K]
    }>): Request<GetApnsSandboxChannelResponse, AWSError> {
        this.boot();
        return this.client.getApnsSandboxChannel(
          this.ops["GetApnsSandboxChannel"].apply(partialParams)
        );
    }

    invokeGetApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof GetApnsVoipChannelRequest & keyof Omit<GetApnsVoipChannelRequest, "ApplicationId">]: (GetApnsVoipChannelRequest)[K]
    }>): Request<GetApnsVoipChannelResponse, AWSError> {
        this.boot();
        return this.client.getApnsVoipChannel(
          this.ops["GetApnsVoipChannel"].apply(partialParams)
        );
    }

    invokeGetApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof GetApnsVoipSandboxChannelRequest & keyof Omit<GetApnsVoipSandboxChannelRequest, "ApplicationId">]: (GetApnsVoipSandboxChannelRequest)[K]
    }>): Request<GetApnsVoipSandboxChannelResponse, AWSError> {
        this.boot();
        return this.client.getApnsVoipSandboxChannel(
          this.ops["GetApnsVoipSandboxChannel"].apply(partialParams)
        );
    }

    invokeGetApp(partialParams: ToOptional<{
      [K in keyof GetAppRequest & keyof Omit<GetAppRequest, "ApplicationId">]: (GetAppRequest)[K]
    }>): Request<GetAppResponse, AWSError> {
        this.boot();
        return this.client.getApp(
          this.ops["GetApp"].apply(partialParams)
        );
    }

    invokeGetApplicationDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetApplicationDateRangeKpiRequest & keyof Omit<GetApplicationDateRangeKpiRequest, "ApplicationId">]: (GetApplicationDateRangeKpiRequest)[K]
    }>): Request<GetApplicationDateRangeKpiResponse, AWSError> {
        this.boot();
        return this.client.getApplicationDateRangeKpi(
          this.ops["GetApplicationDateRangeKpi"].apply(partialParams)
        );
    }

    invokeGetApplicationSettings(partialParams: ToOptional<{
      [K in keyof GetApplicationSettingsRequest & keyof Omit<GetApplicationSettingsRequest, "ApplicationId">]: (GetApplicationSettingsRequest)[K]
    }>): Request<GetApplicationSettingsResponse, AWSError> {
        this.boot();
        return this.client.getApplicationSettings(
          this.ops["GetApplicationSettings"].apply(partialParams)
        );
    }

    invokeGetApps(partialParams: ToOptional<{
      [K in keyof GetAppsRequest]: (GetAppsRequest)[K]
    }>): Request<GetAppsResponse, AWSError> {
        this.boot();
        return this.client.getApps(
          this.ops["GetApps"].apply(partialParams)
        );
    }

    invokeGetBaiduChannel(partialParams: ToOptional<{
      [K in keyof GetBaiduChannelRequest & keyof Omit<GetBaiduChannelRequest, "ApplicationId">]: (GetBaiduChannelRequest)[K]
    }>): Request<GetBaiduChannelResponse, AWSError> {
        this.boot();
        return this.client.getBaiduChannel(
          this.ops["GetBaiduChannel"].apply(partialParams)
        );
    }

    invokeGetCampaign(partialParams: ToOptional<{
      [K in keyof GetCampaignRequest & keyof Omit<GetCampaignRequest, "ApplicationId">]: (GetCampaignRequest)[K]
    }>): Request<GetCampaignResponse, AWSError> {
        this.boot();
        return this.client.getCampaign(
          this.ops["GetCampaign"].apply(partialParams)
        );
    }

    invokeGetCampaignActivities(partialParams: ToOptional<{
      [K in keyof GetCampaignActivitiesRequest & keyof Omit<GetCampaignActivitiesRequest, "ApplicationId">]: (GetCampaignActivitiesRequest)[K]
    }>): Request<GetCampaignActivitiesResponse, AWSError> {
        this.boot();
        return this.client.getCampaignActivities(
          this.ops["GetCampaignActivities"].apply(partialParams)
        );
    }

    invokeGetCampaignDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetCampaignDateRangeKpiRequest & keyof Omit<GetCampaignDateRangeKpiRequest, "ApplicationId">]: (GetCampaignDateRangeKpiRequest)[K]
    }>): Request<GetCampaignDateRangeKpiResponse, AWSError> {
        this.boot();
        return this.client.getCampaignDateRangeKpi(
          this.ops["GetCampaignDateRangeKpi"].apply(partialParams)
        );
    }

    invokeGetCampaignVersion(partialParams: ToOptional<{
      [K in keyof GetCampaignVersionRequest & keyof Omit<GetCampaignVersionRequest, "ApplicationId">]: (GetCampaignVersionRequest)[K]
    }>): Request<GetCampaignVersionResponse, AWSError> {
        this.boot();
        return this.client.getCampaignVersion(
          this.ops["GetCampaignVersion"].apply(partialParams)
        );
    }

    invokeGetCampaignVersions(partialParams: ToOptional<{
      [K in keyof GetCampaignVersionsRequest & keyof Omit<GetCampaignVersionsRequest, "ApplicationId">]: (GetCampaignVersionsRequest)[K]
    }>): Request<GetCampaignVersionsResponse, AWSError> {
        this.boot();
        return this.client.getCampaignVersions(
          this.ops["GetCampaignVersions"].apply(partialParams)
        );
    }

    invokeGetCampaigns(partialParams: ToOptional<{
      [K in keyof GetCampaignsRequest & keyof Omit<GetCampaignsRequest, "ApplicationId">]: (GetCampaignsRequest)[K]
    }>): Request<GetCampaignsResponse, AWSError> {
        this.boot();
        return this.client.getCampaigns(
          this.ops["GetCampaigns"].apply(partialParams)
        );
    }

    invokeGetChannels(partialParams: ToOptional<{
      [K in keyof GetChannelsRequest & keyof Omit<GetChannelsRequest, "ApplicationId">]: (GetChannelsRequest)[K]
    }>): Request<GetChannelsResponse, AWSError> {
        this.boot();
        return this.client.getChannels(
          this.ops["GetChannels"].apply(partialParams)
        );
    }

    invokeGetEmailChannel(partialParams: ToOptional<{
      [K in keyof GetEmailChannelRequest & keyof Omit<GetEmailChannelRequest, "ApplicationId">]: (GetEmailChannelRequest)[K]
    }>): Request<GetEmailChannelResponse, AWSError> {
        this.boot();
        return this.client.getEmailChannel(
          this.ops["GetEmailChannel"].apply(partialParams)
        );
    }

    invokeGetEmailTemplate(partialParams: ToOptional<{
      [K in keyof GetEmailTemplateRequest]: (GetEmailTemplateRequest)[K]
    }>): Request<GetEmailTemplateResponse, AWSError> {
        this.boot();
        return this.client.getEmailTemplate(
          this.ops["GetEmailTemplate"].apply(partialParams)
        );
    }

    invokeGetEndpoint(partialParams: ToOptional<{
      [K in keyof GetEndpointRequest & keyof Omit<GetEndpointRequest, "ApplicationId">]: (GetEndpointRequest)[K]
    }>): Request<GetEndpointResponse, AWSError> {
        this.boot();
        return this.client.getEndpoint(
          this.ops["GetEndpoint"].apply(partialParams)
        );
    }

    invokeGetEventStream(partialParams: ToOptional<{
      [K in keyof GetEventStreamRequest & keyof Omit<GetEventStreamRequest, "ApplicationId">]: (GetEventStreamRequest)[K]
    }>): Request<GetEventStreamResponse, AWSError> {
        this.boot();
        return this.client.getEventStream(
          this.ops["GetEventStream"].apply(partialParams)
        );
    }

    invokeGetExportJob(partialParams: ToOptional<{
      [K in keyof GetExportJobRequest & keyof Omit<GetExportJobRequest, "ApplicationId">]: (GetExportJobRequest)[K]
    }>): Request<GetExportJobResponse, AWSError> {
        this.boot();
        return this.client.getExportJob(
          this.ops["GetExportJob"].apply(partialParams)
        );
    }

    invokeGetExportJobs(partialParams: ToOptional<{
      [K in keyof GetExportJobsRequest & keyof Omit<GetExportJobsRequest, "ApplicationId">]: (GetExportJobsRequest)[K]
    }>): Request<GetExportJobsResponse, AWSError> {
        this.boot();
        return this.client.getExportJobs(
          this.ops["GetExportJobs"].apply(partialParams)
        );
    }

    invokeGetGcmChannel(partialParams: ToOptional<{
      [K in keyof GetGcmChannelRequest & keyof Omit<GetGcmChannelRequest, "ApplicationId">]: (GetGcmChannelRequest)[K]
    }>): Request<GetGcmChannelResponse, AWSError> {
        this.boot();
        return this.client.getGcmChannel(
          this.ops["GetGcmChannel"].apply(partialParams)
        );
    }

    invokeGetImportJob(partialParams: ToOptional<{
      [K in keyof GetImportJobRequest & keyof Omit<GetImportJobRequest, "ApplicationId">]: (GetImportJobRequest)[K]
    }>): Request<GetImportJobResponse, AWSError> {
        this.boot();
        return this.client.getImportJob(
          this.ops["GetImportJob"].apply(partialParams)
        );
    }

    invokeGetImportJobs(partialParams: ToOptional<{
      [K in keyof GetImportJobsRequest & keyof Omit<GetImportJobsRequest, "ApplicationId">]: (GetImportJobsRequest)[K]
    }>): Request<GetImportJobsResponse, AWSError> {
        this.boot();
        return this.client.getImportJobs(
          this.ops["GetImportJobs"].apply(partialParams)
        );
    }

    invokeGetInAppMessages(partialParams: ToOptional<{
      [K in keyof GetInAppMessagesRequest & keyof Omit<GetInAppMessagesRequest, "ApplicationId">]: (GetInAppMessagesRequest)[K]
    }>): Request<GetInAppMessagesResponse, AWSError> {
        this.boot();
        return this.client.getInAppMessages(
          this.ops["GetInAppMessages"].apply(partialParams)
        );
    }

    invokeGetInAppTemplate(partialParams: ToOptional<{
      [K in keyof GetInAppTemplateRequest]: (GetInAppTemplateRequest)[K]
    }>): Request<GetInAppTemplateResponse, AWSError> {
        this.boot();
        return this.client.getInAppTemplate(
          this.ops["GetInAppTemplate"].apply(partialParams)
        );
    }

    invokeGetJourney(partialParams: ToOptional<{
      [K in keyof GetJourneyRequest & keyof Omit<GetJourneyRequest, "ApplicationId">]: (GetJourneyRequest)[K]
    }>): Request<GetJourneyResponse, AWSError> {
        this.boot();
        return this.client.getJourney(
          this.ops["GetJourney"].apply(partialParams)
        );
    }

    invokeGetJourneyDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetJourneyDateRangeKpiRequest & keyof Omit<GetJourneyDateRangeKpiRequest, "ApplicationId">]: (GetJourneyDateRangeKpiRequest)[K]
    }>): Request<GetJourneyDateRangeKpiResponse, AWSError> {
        this.boot();
        return this.client.getJourneyDateRangeKpi(
          this.ops["GetJourneyDateRangeKpi"].apply(partialParams)
        );
    }

    invokeGetJourneyExecutionActivityMetrics(partialParams: ToOptional<{
      [K in keyof GetJourneyExecutionActivityMetricsRequest & keyof Omit<GetJourneyExecutionActivityMetricsRequest, "ApplicationId">]: (GetJourneyExecutionActivityMetricsRequest)[K]
    }>): Request<GetJourneyExecutionActivityMetricsResponse, AWSError> {
        this.boot();
        return this.client.getJourneyExecutionActivityMetrics(
          this.ops["GetJourneyExecutionActivityMetrics"].apply(partialParams)
        );
    }

    invokeGetJourneyExecutionMetrics(partialParams: ToOptional<{
      [K in keyof GetJourneyExecutionMetricsRequest & keyof Omit<GetJourneyExecutionMetricsRequest, "ApplicationId">]: (GetJourneyExecutionMetricsRequest)[K]
    }>): Request<GetJourneyExecutionMetricsResponse, AWSError> {
        this.boot();
        return this.client.getJourneyExecutionMetrics(
          this.ops["GetJourneyExecutionMetrics"].apply(partialParams)
        );
    }

    invokeGetPushTemplate(partialParams: ToOptional<{
      [K in keyof GetPushTemplateRequest]: (GetPushTemplateRequest)[K]
    }>): Request<GetPushTemplateResponse, AWSError> {
        this.boot();
        return this.client.getPushTemplate(
          this.ops["GetPushTemplate"].apply(partialParams)
        );
    }

    invokeGetRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof GetRecommenderConfigurationRequest]: (GetRecommenderConfigurationRequest)[K]
    }>): Request<GetRecommenderConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getRecommenderConfiguration(
          this.ops["GetRecommenderConfiguration"].apply(partialParams)
        );
    }

    invokeGetRecommenderConfigurations(partialParams: ToOptional<{
      [K in keyof GetRecommenderConfigurationsRequest]: (GetRecommenderConfigurationsRequest)[K]
    }>): Request<GetRecommenderConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.getRecommenderConfigurations(
          this.ops["GetRecommenderConfigurations"].apply(partialParams)
        );
    }

    invokeGetSegment(partialParams: ToOptional<{
      [K in keyof GetSegmentRequest & keyof Omit<GetSegmentRequest, "ApplicationId">]: (GetSegmentRequest)[K]
    }>): Request<GetSegmentResponse, AWSError> {
        this.boot();
        return this.client.getSegment(
          this.ops["GetSegment"].apply(partialParams)
        );
    }

    invokeGetSegmentExportJobs(partialParams: ToOptional<{
      [K in keyof GetSegmentExportJobsRequest & keyof Omit<GetSegmentExportJobsRequest, "ApplicationId">]: (GetSegmentExportJobsRequest)[K]
    }>): Request<GetSegmentExportJobsResponse, AWSError> {
        this.boot();
        return this.client.getSegmentExportJobs(
          this.ops["GetSegmentExportJobs"].apply(partialParams)
        );
    }

    invokeGetSegmentImportJobs(partialParams: ToOptional<{
      [K in keyof GetSegmentImportJobsRequest & keyof Omit<GetSegmentImportJobsRequest, "ApplicationId">]: (GetSegmentImportJobsRequest)[K]
    }>): Request<GetSegmentImportJobsResponse, AWSError> {
        this.boot();
        return this.client.getSegmentImportJobs(
          this.ops["GetSegmentImportJobs"].apply(partialParams)
        );
    }

    invokeGetSegmentVersion(partialParams: ToOptional<{
      [K in keyof GetSegmentVersionRequest & keyof Omit<GetSegmentVersionRequest, "ApplicationId">]: (GetSegmentVersionRequest)[K]
    }>): Request<GetSegmentVersionResponse, AWSError> {
        this.boot();
        return this.client.getSegmentVersion(
          this.ops["GetSegmentVersion"].apply(partialParams)
        );
    }

    invokeGetSegmentVersions(partialParams: ToOptional<{
      [K in keyof GetSegmentVersionsRequest & keyof Omit<GetSegmentVersionsRequest, "ApplicationId">]: (GetSegmentVersionsRequest)[K]
    }>): Request<GetSegmentVersionsResponse, AWSError> {
        this.boot();
        return this.client.getSegmentVersions(
          this.ops["GetSegmentVersions"].apply(partialParams)
        );
    }

    invokeGetSegments(partialParams: ToOptional<{
      [K in keyof GetSegmentsRequest & keyof Omit<GetSegmentsRequest, "ApplicationId">]: (GetSegmentsRequest)[K]
    }>): Request<GetSegmentsResponse, AWSError> {
        this.boot();
        return this.client.getSegments(
          this.ops["GetSegments"].apply(partialParams)
        );
    }

    invokeGetSmsChannel(partialParams: ToOptional<{
      [K in keyof GetSmsChannelRequest & keyof Omit<GetSmsChannelRequest, "ApplicationId">]: (GetSmsChannelRequest)[K]
    }>): Request<GetSmsChannelResponse, AWSError> {
        this.boot();
        return this.client.getSmsChannel(
          this.ops["GetSmsChannel"].apply(partialParams)
        );
    }

    invokeGetSmsTemplate(partialParams: ToOptional<{
      [K in keyof GetSmsTemplateRequest]: (GetSmsTemplateRequest)[K]
    }>): Request<GetSmsTemplateResponse, AWSError> {
        this.boot();
        return this.client.getSmsTemplate(
          this.ops["GetSmsTemplate"].apply(partialParams)
        );
    }

    invokeGetUserEndpoints(partialParams: ToOptional<{
      [K in keyof GetUserEndpointsRequest & keyof Omit<GetUserEndpointsRequest, "ApplicationId">]: (GetUserEndpointsRequest)[K]
    }>): Request<GetUserEndpointsResponse, AWSError> {
        this.boot();
        return this.client.getUserEndpoints(
          this.ops["GetUserEndpoints"].apply(partialParams)
        );
    }

    invokeGetVoiceChannel(partialParams: ToOptional<{
      [K in keyof GetVoiceChannelRequest & keyof Omit<GetVoiceChannelRequest, "ApplicationId">]: (GetVoiceChannelRequest)[K]
    }>): Request<GetVoiceChannelResponse, AWSError> {
        this.boot();
        return this.client.getVoiceChannel(
          this.ops["GetVoiceChannel"].apply(partialParams)
        );
    }

    invokeGetVoiceTemplate(partialParams: ToOptional<{
      [K in keyof GetVoiceTemplateRequest]: (GetVoiceTemplateRequest)[K]
    }>): Request<GetVoiceTemplateResponse, AWSError> {
        this.boot();
        return this.client.getVoiceTemplate(
          this.ops["GetVoiceTemplate"].apply(partialParams)
        );
    }

    invokeListJourneys(partialParams: ToOptional<{
      [K in keyof ListJourneysRequest & keyof Omit<ListJourneysRequest, "ApplicationId">]: (ListJourneysRequest)[K]
    }>): Request<ListJourneysResponse, AWSError> {
        this.boot();
        return this.client.listJourneys(
          this.ops["ListJourneys"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListTemplateVersionsRequest]: (ListTemplateVersionsRequest)[K]
    }>): Request<ListTemplateVersionsResponse, AWSError> {
        this.boot();
        return this.client.listTemplateVersions(
          this.ops["ListTemplateVersions"].apply(partialParams)
        );
    }

    invokeListTemplates(partialParams: ToOptional<{
      [K in keyof ListTemplatesRequest]: (ListTemplatesRequest)[K]
    }>): Request<ListTemplatesResponse, AWSError> {
        this.boot();
        return this.client.listTemplates(
          this.ops["ListTemplates"].apply(partialParams)
        );
    }

    invokePhoneNumberValidate(partialParams: ToOptional<{
      [K in keyof PhoneNumberValidateRequest]: (PhoneNumberValidateRequest)[K]
    }>): Request<PhoneNumberValidateResponse, AWSError> {
        this.boot();
        return this.client.phoneNumberValidate(
          this.ops["PhoneNumberValidate"].apply(partialParams)
        );
    }

    invokePutEventStream(partialParams: ToOptional<{
      [K in keyof PutEventStreamRequest & keyof Omit<PutEventStreamRequest, "ApplicationId">]: (PutEventStreamRequest)[K]
    }>): Request<PutEventStreamResponse, AWSError> {
        this.boot();
        return this.client.putEventStream(
          this.ops["PutEventStream"].apply(partialParams)
        );
    }

    invokePutEvents(partialParams: ToOptional<{
      [K in keyof PutEventsRequest & keyof Omit<PutEventsRequest, "ApplicationId">]: (PutEventsRequest)[K]
    }>): Request<PutEventsResponse, AWSError> {
        this.boot();
        return this.client.putEvents(
          this.ops["PutEvents"].apply(partialParams)
        );
    }

    invokeRemoveAttributes(partialParams: ToOptional<{
      [K in keyof RemoveAttributesRequest & keyof Omit<RemoveAttributesRequest, "ApplicationId">]: (RemoveAttributesRequest)[K]
    }>): Request<RemoveAttributesResponse, AWSError> {
        this.boot();
        return this.client.removeAttributes(
          this.ops["RemoveAttributes"].apply(partialParams)
        );
    }

    invokeSendMessages(partialParams: ToOptional<{
      [K in keyof SendMessagesRequest & keyof Omit<SendMessagesRequest, "ApplicationId">]: (SendMessagesRequest)[K]
    }>): Request<SendMessagesResponse, AWSError> {
        this.boot();
        return this.client.sendMessages(
          this.ops["SendMessages"].apply(partialParams)
        );
    }

    invokeSendOTPMessage(partialParams: ToOptional<{
      [K in keyof SendOTPMessageRequest & keyof Omit<SendOTPMessageRequest, "ApplicationId">]: (SendOTPMessageRequest)[K]
    }>): Request<SendOTPMessageResponse, AWSError> {
        this.boot();
        return this.client.sendOTPMessage(
          this.ops["SendOTPMessage"].apply(partialParams)
        );
    }

    invokeSendUsersMessages(partialParams: ToOptional<{
      [K in keyof SendUsersMessagesRequest & keyof Omit<SendUsersMessagesRequest, "ApplicationId">]: (SendUsersMessagesRequest)[K]
    }>): Request<SendUsersMessagesResponse, AWSError> {
        this.boot();
        return this.client.sendUsersMessages(
          this.ops["SendUsersMessages"].apply(partialParams)
        );
    }

    invokeUpdateAdmChannel(partialParams: ToOptional<{
      [K in keyof UpdateAdmChannelRequest & keyof Omit<UpdateAdmChannelRequest, "ApplicationId">]: (UpdateAdmChannelRequest)[K]
    }>): Request<UpdateAdmChannelResponse, AWSError> {
        this.boot();
        return this.client.updateAdmChannel(
          this.ops["UpdateAdmChannel"].apply(partialParams)
        );
    }

    invokeUpdateApnsChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsChannelRequest & keyof Omit<UpdateApnsChannelRequest, "ApplicationId">]: (UpdateApnsChannelRequest)[K]
    }>): Request<UpdateApnsChannelResponse, AWSError> {
        this.boot();
        return this.client.updateApnsChannel(
          this.ops["UpdateApnsChannel"].apply(partialParams)
        );
    }

    invokeUpdateApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsSandboxChannelRequest & keyof Omit<UpdateApnsSandboxChannelRequest, "ApplicationId">]: (UpdateApnsSandboxChannelRequest)[K]
    }>): Request<UpdateApnsSandboxChannelResponse, AWSError> {
        this.boot();
        return this.client.updateApnsSandboxChannel(
          this.ops["UpdateApnsSandboxChannel"].apply(partialParams)
        );
    }

    invokeUpdateApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsVoipChannelRequest & keyof Omit<UpdateApnsVoipChannelRequest, "ApplicationId">]: (UpdateApnsVoipChannelRequest)[K]
    }>): Request<UpdateApnsVoipChannelResponse, AWSError> {
        this.boot();
        return this.client.updateApnsVoipChannel(
          this.ops["UpdateApnsVoipChannel"].apply(partialParams)
        );
    }

    invokeUpdateApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsVoipSandboxChannelRequest & keyof Omit<UpdateApnsVoipSandboxChannelRequest, "ApplicationId">]: (UpdateApnsVoipSandboxChannelRequest)[K]
    }>): Request<UpdateApnsVoipSandboxChannelResponse, AWSError> {
        this.boot();
        return this.client.updateApnsVoipSandboxChannel(
          this.ops["UpdateApnsVoipSandboxChannel"].apply(partialParams)
        );
    }

    invokeUpdateApplicationSettings(partialParams: ToOptional<{
      [K in keyof UpdateApplicationSettingsRequest & keyof Omit<UpdateApplicationSettingsRequest, "ApplicationId">]: (UpdateApplicationSettingsRequest)[K]
    }>): Request<UpdateApplicationSettingsResponse, AWSError> {
        this.boot();
        return this.client.updateApplicationSettings(
          this.ops["UpdateApplicationSettings"].apply(partialParams)
        );
    }

    invokeUpdateBaiduChannel(partialParams: ToOptional<{
      [K in keyof UpdateBaiduChannelRequest & keyof Omit<UpdateBaiduChannelRequest, "ApplicationId">]: (UpdateBaiduChannelRequest)[K]
    }>): Request<UpdateBaiduChannelResponse, AWSError> {
        this.boot();
        return this.client.updateBaiduChannel(
          this.ops["UpdateBaiduChannel"].apply(partialParams)
        );
    }

    invokeUpdateCampaign(partialParams: ToOptional<{
      [K in keyof UpdateCampaignRequest & keyof Omit<UpdateCampaignRequest, "ApplicationId">]: (UpdateCampaignRequest)[K]
    }>): Request<UpdateCampaignResponse, AWSError> {
        this.boot();
        return this.client.updateCampaign(
          this.ops["UpdateCampaign"].apply(partialParams)
        );
    }

    invokeUpdateEmailChannel(partialParams: ToOptional<{
      [K in keyof UpdateEmailChannelRequest & keyof Omit<UpdateEmailChannelRequest, "ApplicationId">]: (UpdateEmailChannelRequest)[K]
    }>): Request<UpdateEmailChannelResponse, AWSError> {
        this.boot();
        return this.client.updateEmailChannel(
          this.ops["UpdateEmailChannel"].apply(partialParams)
        );
    }

    invokeUpdateEmailTemplate(partialParams: ToOptional<{
      [K in keyof UpdateEmailTemplateRequest]: (UpdateEmailTemplateRequest)[K]
    }>): Request<UpdateEmailTemplateResponse, AWSError> {
        this.boot();
        return this.client.updateEmailTemplate(
          this.ops["UpdateEmailTemplate"].apply(partialParams)
        );
    }

    invokeUpdateEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateEndpointRequest & keyof Omit<UpdateEndpointRequest, "ApplicationId">]: (UpdateEndpointRequest)[K]
    }>): Request<UpdateEndpointResponse, AWSError> {
        this.boot();
        return this.client.updateEndpoint(
          this.ops["UpdateEndpoint"].apply(partialParams)
        );
    }

    invokeUpdateEndpointsBatch(partialParams: ToOptional<{
      [K in keyof UpdateEndpointsBatchRequest & keyof Omit<UpdateEndpointsBatchRequest, "ApplicationId">]: (UpdateEndpointsBatchRequest)[K]
    }>): Request<UpdateEndpointsBatchResponse, AWSError> {
        this.boot();
        return this.client.updateEndpointsBatch(
          this.ops["UpdateEndpointsBatch"].apply(partialParams)
        );
    }

    invokeUpdateGcmChannel(partialParams: ToOptional<{
      [K in keyof UpdateGcmChannelRequest & keyof Omit<UpdateGcmChannelRequest, "ApplicationId">]: (UpdateGcmChannelRequest)[K]
    }>): Request<UpdateGcmChannelResponse, AWSError> {
        this.boot();
        return this.client.updateGcmChannel(
          this.ops["UpdateGcmChannel"].apply(partialParams)
        );
    }

    invokeUpdateInAppTemplate(partialParams: ToOptional<{
      [K in keyof UpdateInAppTemplateRequest]: (UpdateInAppTemplateRequest)[K]
    }>): Request<UpdateInAppTemplateResponse, AWSError> {
        this.boot();
        return this.client.updateInAppTemplate(
          this.ops["UpdateInAppTemplate"].apply(partialParams)
        );
    }

    invokeUpdateJourney(partialParams: ToOptional<{
      [K in keyof UpdateJourneyRequest & keyof Omit<UpdateJourneyRequest, "ApplicationId">]: (UpdateJourneyRequest)[K]
    }>): Request<UpdateJourneyResponse, AWSError> {
        this.boot();
        return this.client.updateJourney(
          this.ops["UpdateJourney"].apply(partialParams)
        );
    }

    invokeUpdateJourneyState(partialParams: ToOptional<{
      [K in keyof UpdateJourneyStateRequest & keyof Omit<UpdateJourneyStateRequest, "ApplicationId">]: (UpdateJourneyStateRequest)[K]
    }>): Request<UpdateJourneyStateResponse, AWSError> {
        this.boot();
        return this.client.updateJourneyState(
          this.ops["UpdateJourneyState"].apply(partialParams)
        );
    }

    invokeUpdatePushTemplate(partialParams: ToOptional<{
      [K in keyof UpdatePushTemplateRequest]: (UpdatePushTemplateRequest)[K]
    }>): Request<UpdatePushTemplateResponse, AWSError> {
        this.boot();
        return this.client.updatePushTemplate(
          this.ops["UpdatePushTemplate"].apply(partialParams)
        );
    }

    invokeUpdateRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateRecommenderConfigurationRequest]: (UpdateRecommenderConfigurationRequest)[K]
    }>): Request<UpdateRecommenderConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateRecommenderConfiguration(
          this.ops["UpdateRecommenderConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateSegment(partialParams: ToOptional<{
      [K in keyof UpdateSegmentRequest & keyof Omit<UpdateSegmentRequest, "ApplicationId">]: (UpdateSegmentRequest)[K]
    }>): Request<UpdateSegmentResponse, AWSError> {
        this.boot();
        return this.client.updateSegment(
          this.ops["UpdateSegment"].apply(partialParams)
        );
    }

    invokeUpdateSmsChannel(partialParams: ToOptional<{
      [K in keyof UpdateSmsChannelRequest & keyof Omit<UpdateSmsChannelRequest, "ApplicationId">]: (UpdateSmsChannelRequest)[K]
    }>): Request<UpdateSmsChannelResponse, AWSError> {
        this.boot();
        return this.client.updateSmsChannel(
          this.ops["UpdateSmsChannel"].apply(partialParams)
        );
    }

    invokeUpdateSmsTemplate(partialParams: ToOptional<{
      [K in keyof UpdateSmsTemplateRequest]: (UpdateSmsTemplateRequest)[K]
    }>): Request<UpdateSmsTemplateResponse, AWSError> {
        this.boot();
        return this.client.updateSmsTemplate(
          this.ops["UpdateSmsTemplate"].apply(partialParams)
        );
    }

    invokeUpdateTemplateActiveVersion(partialParams: ToOptional<{
      [K in keyof UpdateTemplateActiveVersionRequest]: (UpdateTemplateActiveVersionRequest)[K]
    }>): Request<UpdateTemplateActiveVersionResponse, AWSError> {
        this.boot();
        return this.client.updateTemplateActiveVersion(
          this.ops["UpdateTemplateActiveVersion"].apply(partialParams)
        );
    }

    invokeUpdateVoiceChannel(partialParams: ToOptional<{
      [K in keyof UpdateVoiceChannelRequest & keyof Omit<UpdateVoiceChannelRequest, "ApplicationId">]: (UpdateVoiceChannelRequest)[K]
    }>): Request<UpdateVoiceChannelResponse, AWSError> {
        this.boot();
        return this.client.updateVoiceChannel(
          this.ops["UpdateVoiceChannel"].apply(partialParams)
        );
    }

    invokeUpdateVoiceTemplate(partialParams: ToOptional<{
      [K in keyof UpdateVoiceTemplateRequest]: (UpdateVoiceTemplateRequest)[K]
    }>): Request<UpdateVoiceTemplateResponse, AWSError> {
        this.boot();
        return this.client.updateVoiceTemplate(
          this.ops["UpdateVoiceTemplate"].apply(partialParams)
        );
    }

    invokeVerifyOTPMessage(partialParams: ToOptional<{
      [K in keyof VerifyOTPMessageRequest & keyof Omit<VerifyOTPMessageRequest, "ApplicationId">]: (VerifyOTPMessageRequest)[K]
    }>): Request<VerifyOTPMessageResponse, AWSError> {
        this.boot();
        return this.client.verifyOTPMessage(
          this.ops["VerifyOTPMessage"].apply(partialParams)
        );
    }
}