
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
const schema = require("../apis/pinpoint-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.pinpoint.ApnsSandboxChannel {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.pinpoint.ApnsSandboxChannel>) {
        super(...args)
        this.client = new awssdk.Pinpoint()
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

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): Request<CreateAppResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].applicator.apply(partialParams)
        );
    }

    invokeCreateCampaign(partialParams: ToOptional<{
      [K in keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest & keyof CreateCampaignRequest]: (CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest & CreateCampaignRequest)[K]
    }>): Request<CreateCampaignResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCampaign(
          this.ops["CreateCampaign"].applicator.apply(partialParams)
        );
    }

    invokeCreateEmailTemplate(partialParams: ToOptional<{
      [K in keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest & keyof CreateEmailTemplateRequest]: (CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest & CreateEmailTemplateRequest)[K]
    }>): Request<CreateEmailTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEmailTemplate(
          this.ops["CreateEmailTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateExportJob(partialParams: ToOptional<{
      [K in keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest & keyof CreateExportJobRequest]: (CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest & CreateExportJobRequest)[K]
    }>): Request<CreateExportJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createExportJob(
          this.ops["CreateExportJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateImportJob(partialParams: ToOptional<{
      [K in keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest & keyof CreateImportJobRequest]: (CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest & CreateImportJobRequest)[K]
    }>): Request<CreateImportJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImportJob(
          this.ops["CreateImportJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateInAppTemplate(partialParams: ToOptional<{
      [K in keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest & keyof CreateInAppTemplateRequest]: (CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest & CreateInAppTemplateRequest)[K]
    }>): Request<CreateInAppTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInAppTemplate(
          this.ops["CreateInAppTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateJourney(partialParams: ToOptional<{
      [K in keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest & keyof CreateJourneyRequest]: (CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest & CreateJourneyRequest)[K]
    }>): Request<CreateJourneyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJourney(
          this.ops["CreateJourney"].applicator.apply(partialParams)
        );
    }

    invokeCreatePushTemplate(partialParams: ToOptional<{
      [K in keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest & keyof CreatePushTemplateRequest]: (CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest & CreatePushTemplateRequest)[K]
    }>): Request<CreatePushTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPushTemplate(
          this.ops["CreatePushTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest & keyof CreateRecommenderConfigurationRequest]: (CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest & CreateRecommenderConfigurationRequest)[K]
    }>): Request<CreateRecommenderConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRecommenderConfiguration(
          this.ops["CreateRecommenderConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateSegment(partialParams: ToOptional<{
      [K in keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest & keyof CreateSegmentRequest]: (CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest & CreateSegmentRequest)[K]
    }>): Request<CreateSegmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSegment(
          this.ops["CreateSegment"].applicator.apply(partialParams)
        );
    }

    invokeCreateSmsTemplate(partialParams: ToOptional<{
      [K in keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest & keyof CreateSmsTemplateRequest]: (CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest & CreateSmsTemplateRequest)[K]
    }>): Request<CreateSmsTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSmsTemplate(
          this.ops["CreateSmsTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateVoiceTemplate(partialParams: ToOptional<{
      [K in keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest & keyof CreateVoiceTemplateRequest]: (CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest & CreateVoiceTemplateRequest)[K]
    }>): Request<CreateVoiceTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVoiceTemplate(
          this.ops["CreateVoiceTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAdmChannel(partialParams: ToOptional<{
      [K in keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest & keyof DeleteAdmChannelRequest]: (DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest & DeleteAdmChannelRequest)[K]
    }>): Request<DeleteAdmChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAdmChannel(
          this.ops["DeleteAdmChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApnsChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest & keyof DeleteApnsChannelRequest]: (DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest & DeleteApnsChannelRequest)[K]
    }>): Request<DeleteApnsChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApnsChannel(
          this.ops["DeleteApnsChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest & keyof DeleteApnsSandboxChannelRequest]: (DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest & DeleteApnsSandboxChannelRequest)[K]
    }>): Request<DeleteApnsSandboxChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApnsSandboxChannel(
          this.ops["DeleteApnsSandboxChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest & keyof DeleteApnsVoipChannelRequest]: (DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest & DeleteApnsVoipChannelRequest)[K]
    }>): Request<DeleteApnsVoipChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApnsVoipChannel(
          this.ops["DeleteApnsVoipChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest & keyof DeleteApnsVoipSandboxChannelRequest]: (DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest & DeleteApnsVoipSandboxChannelRequest)[K]
    }>): Request<DeleteApnsVoipSandboxChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApnsVoipSandboxChannel(
          this.ops["DeleteApnsVoipSandboxChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): Request<DeleteAppResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApp(
          this.ops["DeleteApp"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBaiduChannel(partialParams: ToOptional<{
      [K in keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest & keyof DeleteBaiduChannelRequest]: (DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest & DeleteBaiduChannelRequest)[K]
    }>): Request<DeleteBaiduChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBaiduChannel(
          this.ops["DeleteBaiduChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCampaign(partialParams: ToOptional<{
      [K in keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest & keyof DeleteCampaignRequest]: (DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest & DeleteCampaignRequest)[K]
    }>): Request<DeleteCampaignResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCampaign(
          this.ops["DeleteCampaign"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEmailChannel(partialParams: ToOptional<{
      [K in keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest & keyof DeleteEmailChannelRequest]: (DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest & DeleteEmailChannelRequest)[K]
    }>): Request<DeleteEmailChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEmailChannel(
          this.ops["DeleteEmailChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEmailTemplate(partialParams: ToOptional<{
      [K in keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest & keyof DeleteEmailTemplateRequest]: (DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest & DeleteEmailTemplateRequest)[K]
    }>): Request<DeleteEmailTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEmailTemplate(
          this.ops["DeleteEmailTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest]: (DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest)[K]
    }>): Request<DeleteEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(
          this.ops["DeleteEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventStream(partialParams: ToOptional<{
      [K in keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest & keyof DeleteEventStreamRequest]: (DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest & DeleteEventStreamRequest)[K]
    }>): Request<DeleteEventStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventStream(
          this.ops["DeleteEventStream"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGcmChannel(partialParams: ToOptional<{
      [K in keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest & keyof DeleteGcmChannelRequest]: (DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest & DeleteGcmChannelRequest)[K]
    }>): Request<DeleteGcmChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGcmChannel(
          this.ops["DeleteGcmChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInAppTemplate(partialParams: ToOptional<{
      [K in keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest & keyof DeleteInAppTemplateRequest]: (DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest & DeleteInAppTemplateRequest)[K]
    }>): Request<DeleteInAppTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInAppTemplate(
          this.ops["DeleteInAppTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJourney(partialParams: ToOptional<{
      [K in keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest & keyof DeleteJourneyRequest]: (DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest & DeleteJourneyRequest)[K]
    }>): Request<DeleteJourneyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJourney(
          this.ops["DeleteJourney"].applicator.apply(partialParams)
        );
    }

    invokeDeletePushTemplate(partialParams: ToOptional<{
      [K in keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest & keyof DeletePushTemplateRequest]: (DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest & DeletePushTemplateRequest)[K]
    }>): Request<DeletePushTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePushTemplate(
          this.ops["DeletePushTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest & keyof DeleteRecommenderConfigurationRequest]: (DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest & DeleteRecommenderConfigurationRequest)[K]
    }>): Request<DeleteRecommenderConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRecommenderConfiguration(
          this.ops["DeleteRecommenderConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSegment(partialParams: ToOptional<{
      [K in keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest & keyof DeleteSegmentRequest]: (DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest & DeleteSegmentRequest)[K]
    }>): Request<DeleteSegmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSegment(
          this.ops["DeleteSegment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSmsChannel(partialParams: ToOptional<{
      [K in keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest & keyof DeleteSmsChannelRequest]: (DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest & DeleteSmsChannelRequest)[K]
    }>): Request<DeleteSmsChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSmsChannel(
          this.ops["DeleteSmsChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSmsTemplate(partialParams: ToOptional<{
      [K in keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest & keyof DeleteSmsTemplateRequest]: (DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest & DeleteSmsTemplateRequest)[K]
    }>): Request<DeleteSmsTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSmsTemplate(
          this.ops["DeleteSmsTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserEndpoints(partialParams: ToOptional<{
      [K in keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest & keyof DeleteUserEndpointsRequest]: (DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest & DeleteUserEndpointsRequest)[K]
    }>): Request<DeleteUserEndpointsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserEndpoints(
          this.ops["DeleteUserEndpoints"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceChannel(partialParams: ToOptional<{
      [K in keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest & keyof DeleteVoiceChannelRequest]: (DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest & DeleteVoiceChannelRequest)[K]
    }>): Request<DeleteVoiceChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceChannel(
          this.ops["DeleteVoiceChannel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVoiceTemplate(partialParams: ToOptional<{
      [K in keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest & keyof DeleteVoiceTemplateRequest]: (DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest & DeleteVoiceTemplateRequest)[K]
    }>): Request<DeleteVoiceTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVoiceTemplate(
          this.ops["DeleteVoiceTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetAdmChannel(partialParams: ToOptional<{
      [K in keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest & keyof GetAdmChannelRequest]: (GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest & GetAdmChannelRequest)[K]
    }>): Request<GetAdmChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAdmChannel(
          this.ops["GetAdmChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetApnsChannel(partialParams: ToOptional<{
      [K in keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest & keyof GetApnsChannelRequest]: (GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest & GetApnsChannelRequest)[K]
    }>): Request<GetApnsChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApnsChannel(
          this.ops["GetApnsChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest & keyof GetApnsSandboxChannelRequest]: (GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest & GetApnsSandboxChannelRequest)[K]
    }>): Request<GetApnsSandboxChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApnsSandboxChannel(
          this.ops["GetApnsSandboxChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest & keyof GetApnsVoipChannelRequest]: (GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest & GetApnsVoipChannelRequest)[K]
    }>): Request<GetApnsVoipChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApnsVoipChannel(
          this.ops["GetApnsVoipChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest & keyof GetApnsVoipSandboxChannelRequest]: (GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest & GetApnsVoipSandboxChannelRequest)[K]
    }>): Request<GetApnsVoipSandboxChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApnsVoipSandboxChannel(
          this.ops["GetApnsVoipSandboxChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetApp(partialParams: ToOptional<{
      [K in keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest]: (GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest)[K]
    }>): Request<GetAppResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApp(
          this.ops["GetApp"].applicator.apply(partialParams)
        );
    }

    invokeGetApplicationDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest & keyof GetApplicationDateRangeKpiRequest]: (GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest & GetApplicationDateRangeKpiRequest)[K]
    }>): Request<GetApplicationDateRangeKpiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplicationDateRangeKpi(
          this.ops["GetApplicationDateRangeKpi"].applicator.apply(partialParams)
        );
    }

    invokeGetApplicationSettings(partialParams: ToOptional<{
      [K in keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest & keyof GetApplicationSettingsRequest]: (GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest & GetApplicationSettingsRequest)[K]
    }>): Request<GetApplicationSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplicationSettings(
          this.ops["GetApplicationSettings"].applicator.apply(partialParams)
        );
    }

    invokeGetBaiduChannel(partialParams: ToOptional<{
      [K in keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest & keyof GetBaiduChannelRequest]: (GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest & GetBaiduChannelRequest)[K]
    }>): Request<GetBaiduChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBaiduChannel(
          this.ops["GetBaiduChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetCampaign(partialParams: ToOptional<{
      [K in keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest & keyof GetCampaignRequest]: (GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest & GetCampaignRequest)[K]
    }>): Request<GetCampaignResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaign(
          this.ops["GetCampaign"].applicator.apply(partialParams)
        );
    }

    invokeGetCampaignActivities(partialParams: ToOptional<{
      [K in keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest & keyof GetCampaignActivitiesRequest]: (GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest & GetCampaignActivitiesRequest)[K]
    }>): Request<GetCampaignActivitiesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaignActivities(
          this.ops["GetCampaignActivities"].applicator.apply(partialParams)
        );
    }

    invokeGetCampaignDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest & keyof GetCampaignDateRangeKpiRequest]: (GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest & GetCampaignDateRangeKpiRequest)[K]
    }>): Request<GetCampaignDateRangeKpiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaignDateRangeKpi(
          this.ops["GetCampaignDateRangeKpi"].applicator.apply(partialParams)
        );
    }

    invokeGetCampaignVersion(partialParams: ToOptional<{
      [K in keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest & keyof GetCampaignVersionRequest]: (GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest & GetCampaignVersionRequest)[K]
    }>): Request<GetCampaignVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaignVersion(
          this.ops["GetCampaignVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetCampaignVersions(partialParams: ToOptional<{
      [K in keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest & keyof GetCampaignVersionsRequest]: (GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest & GetCampaignVersionsRequest)[K]
    }>): Request<GetCampaignVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaignVersions(
          this.ops["GetCampaignVersions"].applicator.apply(partialParams)
        );
    }

    invokeGetCampaigns(partialParams: ToOptional<{
      [K in keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest & keyof GetCampaignsRequest]: (GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest & GetCampaignsRequest)[K]
    }>): Request<GetCampaignsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCampaigns(
          this.ops["GetCampaigns"].applicator.apply(partialParams)
        );
    }

    invokeGetChannels(partialParams: ToOptional<{
      [K in keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest & keyof GetChannelsRequest]: (GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest & GetChannelsRequest)[K]
    }>): Request<GetChannelsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChannels(
          this.ops["GetChannels"].applicator.apply(partialParams)
        );
    }

    invokeGetEmailChannel(partialParams: ToOptional<{
      [K in keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest & keyof GetEmailChannelRequest]: (GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest & GetEmailChannelRequest)[K]
    }>): Request<GetEmailChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEmailChannel(
          this.ops["GetEmailChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetEmailTemplate(partialParams: ToOptional<{
      [K in keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest & keyof GetEmailTemplateRequest]: (GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest & GetEmailTemplateRequest)[K]
    }>): Request<GetEmailTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEmailTemplate(
          this.ops["GetEmailTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetEndpoint(partialParams: ToOptional<{
      [K in keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest & keyof GetEndpointRequest]: (GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest & GetEndpointRequest)[K]
    }>): Request<GetEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEndpoint(
          this.ops["GetEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeGetEventStream(partialParams: ToOptional<{
      [K in keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest & keyof GetEventStreamRequest]: (GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest & GetEventStreamRequest)[K]
    }>): Request<GetEventStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventStream(
          this.ops["GetEventStream"].applicator.apply(partialParams)
        );
    }

    invokeGetExportJob(partialParams: ToOptional<{
      [K in keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest & keyof GetExportJobRequest]: (GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest & GetExportJobRequest)[K]
    }>): Request<GetExportJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getExportJob(
          this.ops["GetExportJob"].applicator.apply(partialParams)
        );
    }

    invokeGetExportJobs(partialParams: ToOptional<{
      [K in keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest & keyof GetExportJobsRequest]: (GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest & GetExportJobsRequest)[K]
    }>): Request<GetExportJobsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getExportJobs(
          this.ops["GetExportJobs"].applicator.apply(partialParams)
        );
    }

    invokeGetGcmChannel(partialParams: ToOptional<{
      [K in keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest & keyof GetGcmChannelRequest]: (GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest & GetGcmChannelRequest)[K]
    }>): Request<GetGcmChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGcmChannel(
          this.ops["GetGcmChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetImportJob(partialParams: ToOptional<{
      [K in keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest & keyof GetImportJobRequest]: (GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest & GetImportJobRequest)[K]
    }>): Request<GetImportJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImportJob(
          this.ops["GetImportJob"].applicator.apply(partialParams)
        );
    }

    invokeGetImportJobs(partialParams: ToOptional<{
      [K in keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest & keyof GetImportJobsRequest]: (GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest & GetImportJobsRequest)[K]
    }>): Request<GetImportJobsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getImportJobs(
          this.ops["GetImportJobs"].applicator.apply(partialParams)
        );
    }

    invokeGetInAppMessages(partialParams: ToOptional<{
      [K in keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest & keyof GetInAppMessagesRequest]: (GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest & GetInAppMessagesRequest)[K]
    }>): Request<GetInAppMessagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInAppMessages(
          this.ops["GetInAppMessages"].applicator.apply(partialParams)
        );
    }

    invokeGetInAppTemplate(partialParams: ToOptional<{
      [K in keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest & keyof GetInAppTemplateRequest]: (GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest & GetInAppTemplateRequest)[K]
    }>): Request<GetInAppTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInAppTemplate(
          this.ops["GetInAppTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetJourney(partialParams: ToOptional<{
      [K in keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest & keyof GetJourneyRequest]: (GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest & GetJourneyRequest)[K]
    }>): Request<GetJourneyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJourney(
          this.ops["GetJourney"].applicator.apply(partialParams)
        );
    }

    invokeGetJourneyDateRangeKpi(partialParams: ToOptional<{
      [K in keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest & keyof GetJourneyDateRangeKpiRequest]: (GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest & GetJourneyDateRangeKpiRequest)[K]
    }>): Request<GetJourneyDateRangeKpiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJourneyDateRangeKpi(
          this.ops["GetJourneyDateRangeKpi"].applicator.apply(partialParams)
        );
    }

    invokeGetJourneyExecutionActivityMetrics(partialParams: ToOptional<{
      [K in keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest & keyof GetJourneyExecutionActivityMetricsRequest]: (GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest & GetJourneyExecutionActivityMetricsRequest)[K]
    }>): Request<GetJourneyExecutionActivityMetricsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJourneyExecutionActivityMetrics(
          this.ops["GetJourneyExecutionActivityMetrics"].applicator.apply(partialParams)
        );
    }

    invokeGetJourneyExecutionMetrics(partialParams: ToOptional<{
      [K in keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest & keyof GetJourneyExecutionMetricsRequest]: (GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest & GetJourneyExecutionMetricsRequest)[K]
    }>): Request<GetJourneyExecutionMetricsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJourneyExecutionMetrics(
          this.ops["GetJourneyExecutionMetrics"].applicator.apply(partialParams)
        );
    }

    invokeGetPushTemplate(partialParams: ToOptional<{
      [K in keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest & keyof GetPushTemplateRequest]: (GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest & GetPushTemplateRequest)[K]
    }>): Request<GetPushTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPushTemplate(
          this.ops["GetPushTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest & keyof GetRecommenderConfigurationRequest]: (GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest & GetRecommenderConfigurationRequest)[K]
    }>): Request<GetRecommenderConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRecommenderConfiguration(
          this.ops["GetRecommenderConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetSegment(partialParams: ToOptional<{
      [K in keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest & keyof GetSegmentRequest]: (GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest & GetSegmentRequest)[K]
    }>): Request<GetSegmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegment(
          this.ops["GetSegment"].applicator.apply(partialParams)
        );
    }

    invokeGetSegmentExportJobs(partialParams: ToOptional<{
      [K in keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest & keyof GetSegmentExportJobsRequest]: (GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest & GetSegmentExportJobsRequest)[K]
    }>): Request<GetSegmentExportJobsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegmentExportJobs(
          this.ops["GetSegmentExportJobs"].applicator.apply(partialParams)
        );
    }

    invokeGetSegmentImportJobs(partialParams: ToOptional<{
      [K in keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest & keyof GetSegmentImportJobsRequest]: (GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest & GetSegmentImportJobsRequest)[K]
    }>): Request<GetSegmentImportJobsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegmentImportJobs(
          this.ops["GetSegmentImportJobs"].applicator.apply(partialParams)
        );
    }

    invokeGetSegmentVersion(partialParams: ToOptional<{
      [K in keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest & keyof GetSegmentVersionRequest]: (GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest & GetSegmentVersionRequest)[K]
    }>): Request<GetSegmentVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegmentVersion(
          this.ops["GetSegmentVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetSegmentVersions(partialParams: ToOptional<{
      [K in keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest & keyof GetSegmentVersionsRequest]: (GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest & GetSegmentVersionsRequest)[K]
    }>): Request<GetSegmentVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegmentVersions(
          this.ops["GetSegmentVersions"].applicator.apply(partialParams)
        );
    }

    invokeGetSegments(partialParams: ToOptional<{
      [K in keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest & keyof GetSegmentsRequest]: (GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest & GetSegmentsRequest)[K]
    }>): Request<GetSegmentsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSegments(
          this.ops["GetSegments"].applicator.apply(partialParams)
        );
    }

    invokeGetSmsChannel(partialParams: ToOptional<{
      [K in keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest & keyof GetSmsChannelRequest]: (GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest & GetSmsChannelRequest)[K]
    }>): Request<GetSmsChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSmsChannel(
          this.ops["GetSmsChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetSmsTemplate(partialParams: ToOptional<{
      [K in keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest & keyof GetSmsTemplateRequest]: (GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest & GetSmsTemplateRequest)[K]
    }>): Request<GetSmsTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSmsTemplate(
          this.ops["GetSmsTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetUserEndpoints(partialParams: ToOptional<{
      [K in keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest & keyof GetUserEndpointsRequest]: (GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest & GetUserEndpointsRequest)[K]
    }>): Request<GetUserEndpointsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUserEndpoints(
          this.ops["GetUserEndpoints"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceChannel(partialParams: ToOptional<{
      [K in keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest & keyof GetVoiceChannelRequest]: (GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest & GetVoiceChannelRequest)[K]
    }>): Request<GetVoiceChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceChannel(
          this.ops["GetVoiceChannel"].applicator.apply(partialParams)
        );
    }

    invokeGetVoiceTemplate(partialParams: ToOptional<{
      [K in keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest & keyof GetVoiceTemplateRequest]: (GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest & GetVoiceTemplateRequest)[K]
    }>): Request<GetVoiceTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVoiceTemplate(
          this.ops["GetVoiceTemplate"].applicator.apply(partialParams)
        );
    }

    invokeListJourneys(partialParams: ToOptional<{
      [K in keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest & keyof ListJourneysRequest]: (ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest & ListJourneysRequest)[K]
    }>): Request<ListJourneysResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJourneys(
          this.ops["ListJourneys"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListTemplateVersions(partialParams: ToOptional<{
      [K in keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest & keyof ListTemplateVersionsRequest]: (ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest & ListTemplateVersionsRequest)[K]
    }>): Request<ListTemplateVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTemplateVersions(
          this.ops["ListTemplateVersions"].applicator.apply(partialParams)
        );
    }

    invokePhoneNumberValidate(partialParams: ToOptional<{
      [K in keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest & keyof PhoneNumberValidateRequest]: (PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest & PhoneNumberValidateRequest)[K]
    }>): Request<PhoneNumberValidateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.phoneNumberValidate(
          this.ops["PhoneNumberValidate"].applicator.apply(partialParams)
        );
    }

    invokePutEventStream(partialParams: ToOptional<{
      [K in keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest & keyof PutEventStreamRequest]: (PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest & PutEventStreamRequest)[K]
    }>): Request<PutEventStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEventStream(
          this.ops["PutEventStream"].applicator.apply(partialParams)
        );
    }

    invokePutEvents(partialParams: ToOptional<{
      [K in keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest & keyof PutEventsRequest]: (PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest & PutEventsRequest)[K]
    }>): Request<PutEventsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEvents(
          this.ops["PutEvents"].applicator.apply(partialParams)
        );
    }

    invokeRemoveAttributes(partialParams: ToOptional<{
      [K in keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest & keyof RemoveAttributesRequest]: (RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest & RemoveAttributesRequest)[K]
    }>): Request<RemoveAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeAttributes(
          this.ops["RemoveAttributes"].applicator.apply(partialParams)
        );
    }

    invokeSendMessages(partialParams: ToOptional<{
      [K in keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest & keyof SendMessagesRequest]: (SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest & SendMessagesRequest)[K]
    }>): Request<SendMessagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendMessages(
          this.ops["SendMessages"].applicator.apply(partialParams)
        );
    }

    invokeSendOTPMessage(partialParams: ToOptional<{
      [K in keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest & keyof SendOTPMessageRequest]: (SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest & SendOTPMessageRequest)[K]
    }>): Request<SendOTPMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendOTPMessage(
          this.ops["SendOTPMessage"].applicator.apply(partialParams)
        );
    }

    invokeSendUsersMessages(partialParams: ToOptional<{
      [K in keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest & keyof SendUsersMessagesRequest]: (SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest & SendUsersMessagesRequest)[K]
    }>): Request<SendUsersMessagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendUsersMessages(
          this.ops["SendUsersMessages"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAdmChannel(partialParams: ToOptional<{
      [K in keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest & keyof UpdateAdmChannelRequest]: (UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest & UpdateAdmChannelRequest)[K]
    }>): Request<UpdateAdmChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAdmChannel(
          this.ops["UpdateAdmChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApnsChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest & keyof UpdateApnsChannelRequest]: (UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest & UpdateApnsChannelRequest)[K]
    }>): Request<UpdateApnsChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApnsChannel(
          this.ops["UpdateApnsChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApnsSandboxChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest & keyof UpdateApnsSandboxChannelRequest]: (UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest & UpdateApnsSandboxChannelRequest)[K]
    }>): Request<UpdateApnsSandboxChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApnsSandboxChannel(
          this.ops["UpdateApnsSandboxChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApnsVoipChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest & keyof UpdateApnsVoipChannelRequest]: (UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest & UpdateApnsVoipChannelRequest)[K]
    }>): Request<UpdateApnsVoipChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApnsVoipChannel(
          this.ops["UpdateApnsVoipChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApnsVoipSandboxChannel(partialParams: ToOptional<{
      [K in keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest & keyof UpdateApnsVoipSandboxChannelRequest]: (UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest & UpdateApnsVoipSandboxChannelRequest)[K]
    }>): Request<UpdateApnsVoipSandboxChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApnsVoipSandboxChannel(
          this.ops["UpdateApnsVoipSandboxChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplicationSettings(partialParams: ToOptional<{
      [K in keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest & keyof UpdateApplicationSettingsRequest]: (UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest & UpdateApplicationSettingsRequest)[K]
    }>): Request<UpdateApplicationSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplicationSettings(
          this.ops["UpdateApplicationSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBaiduChannel(partialParams: ToOptional<{
      [K in keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest & keyof UpdateBaiduChannelRequest]: (UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest & UpdateBaiduChannelRequest)[K]
    }>): Request<UpdateBaiduChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBaiduChannel(
          this.ops["UpdateBaiduChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCampaign(partialParams: ToOptional<{
      [K in keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest & keyof UpdateCampaignRequest]: (UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest & UpdateCampaignRequest)[K]
    }>): Request<UpdateCampaignResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCampaign(
          this.ops["UpdateCampaign"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEmailChannel(partialParams: ToOptional<{
      [K in keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest & keyof UpdateEmailChannelRequest]: (UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest & UpdateEmailChannelRequest)[K]
    }>): Request<UpdateEmailChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEmailChannel(
          this.ops["UpdateEmailChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEmailTemplate(partialParams: ToOptional<{
      [K in keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest & keyof UpdateEmailTemplateRequest]: (UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest & UpdateEmailTemplateRequest)[K]
    }>): Request<UpdateEmailTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEmailTemplate(
          this.ops["UpdateEmailTemplate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest & keyof UpdateEndpointRequest]: (UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest & UpdateEndpointRequest)[K]
    }>): Request<UpdateEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpoint(
          this.ops["UpdateEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEndpointsBatch(partialParams: ToOptional<{
      [K in keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest & keyof UpdateEndpointsBatchRequest]: (UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest & UpdateEndpointsBatchRequest)[K]
    }>): Request<UpdateEndpointsBatchResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpointsBatch(
          this.ops["UpdateEndpointsBatch"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGcmChannel(partialParams: ToOptional<{
      [K in keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest & keyof UpdateGcmChannelRequest]: (UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest & UpdateGcmChannelRequest)[K]
    }>): Request<UpdateGcmChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGcmChannel(
          this.ops["UpdateGcmChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateInAppTemplate(partialParams: ToOptional<{
      [K in keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest & keyof UpdateInAppTemplateRequest]: (UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest & UpdateInAppTemplateRequest)[K]
    }>): Request<UpdateInAppTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInAppTemplate(
          this.ops["UpdateInAppTemplate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateJourney(partialParams: ToOptional<{
      [K in keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest & keyof UpdateJourneyRequest]: (UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest & UpdateJourneyRequest)[K]
    }>): Request<UpdateJourneyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJourney(
          this.ops["UpdateJourney"].applicator.apply(partialParams)
        );
    }

    invokeUpdateJourneyState(partialParams: ToOptional<{
      [K in keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest & keyof UpdateJourneyStateRequest]: (UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest & UpdateJourneyStateRequest)[K]
    }>): Request<UpdateJourneyStateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJourneyState(
          this.ops["UpdateJourneyState"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePushTemplate(partialParams: ToOptional<{
      [K in keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest & keyof UpdatePushTemplateRequest]: (UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest & UpdatePushTemplateRequest)[K]
    }>): Request<UpdatePushTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePushTemplate(
          this.ops["UpdatePushTemplate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRecommenderConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest & keyof UpdateRecommenderConfigurationRequest]: (UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest & UpdateRecommenderConfigurationRequest)[K]
    }>): Request<UpdateRecommenderConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRecommenderConfiguration(
          this.ops["UpdateRecommenderConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSegment(partialParams: ToOptional<{
      [K in keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest & keyof UpdateSegmentRequest]: (UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest & UpdateSegmentRequest)[K]
    }>): Request<UpdateSegmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSegment(
          this.ops["UpdateSegment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSmsChannel(partialParams: ToOptional<{
      [K in keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest & keyof UpdateSmsChannelRequest]: (UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest & UpdateSmsChannelRequest)[K]
    }>): Request<UpdateSmsChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSmsChannel(
          this.ops["UpdateSmsChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSmsTemplate(partialParams: ToOptional<{
      [K in keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest & keyof UpdateSmsTemplateRequest]: (UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest & UpdateSmsTemplateRequest)[K]
    }>): Request<UpdateSmsTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSmsTemplate(
          this.ops["UpdateSmsTemplate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTemplateActiveVersion(partialParams: ToOptional<{
      [K in keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest & keyof UpdateTemplateActiveVersionRequest]: (UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest & UpdateTemplateActiveVersionRequest)[K]
    }>): Request<UpdateTemplateActiveVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTemplateActiveVersion(
          this.ops["UpdateTemplateActiveVersion"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVoiceChannel(partialParams: ToOptional<{
      [K in keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest & keyof UpdateVoiceChannelRequest]: (UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest & UpdateVoiceChannelRequest)[K]
    }>): Request<UpdateVoiceChannelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceChannel(
          this.ops["UpdateVoiceChannel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVoiceTemplate(partialParams: ToOptional<{
      [K in keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest & keyof UpdateVoiceTemplateRequest]: (UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest & UpdateVoiceTemplateRequest)[K]
    }>): Request<UpdateVoiceTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVoiceTemplate(
          this.ops["UpdateVoiceTemplate"].applicator.apply(partialParams)
        );
    }

    invokeVerifyOTPMessage(partialParams: ToOptional<{
      [K in keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest & keyof VerifyOTPMessageRequest]: (VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest & VerifyOTPMessageRequest)[K]
    }>): Request<VerifyOTPMessageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.verifyOTPMessage(
          this.ops["VerifyOTPMessage"].applicator.apply(partialParams)
        );
    }
}