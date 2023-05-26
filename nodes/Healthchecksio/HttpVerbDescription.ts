import {INodeProperties} from 'n8n-workflow';

// When the resource `ping` is selected, this `operation` parameter will be shown.
export const httpVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['by_uuid'],
			},
		},
		options: [
			{
				name: 'Ping',
				value: 'ping',
				action: 'Ping',
				routing: {
					request: {
						method: 'GET',
						url: '=/ping/{{$parameter.uuid}}',
					},
				},
			},
			{
				name: 'Start',
				value: 'start',
				action: 'Start',
				routing: {
					request: {
						method: 'GET',
						url: '=/ping/{{$parameter.uuid}}/start',
					},
				},
			},
			{
				name: 'Fail',
				value: 'fail',
				action: 'Fail',
				routing: {
					request: {
						method: 'GET',
						url: '=/ping/{{$parameter.uuid}}/fail',
					},
				},
			},
			{
				name: 'Log',
				value: 'log',
				action: 'Log',
				routing: {
					request: {
						method: 'GET',
						url: '=/ping/{{$parameter.uuid}}/log',
					},
				},
			},
		],
		default: 'ping',
	},
];

const pingOperation: INodeProperties[] = [
	{
		displayName: 'UUID',
		name: 'uuid',
		default: 'uuid.v4()',
		description: '/ping/&lt;UUID&gt;',
		displayOptions: {
			show: {
				resource: ['by_uuid'],
				operation: ['ping'],
			},
		},
		type: 'string',
		required: true,
	},
];
const startOperation: INodeProperties[] = [
	{
		displayName: 'UUID',
		name: 'uuid',
		default: 'uuid.v4()',
		description: '/ping/&lt;UUID&gt;/start',
		displayOptions: {
			show: {
				resource: ['by_uuid'],
				operation: ['start'],
			},
		},
		type: 'string',
		required: true,
	},
];
const failOperation: INodeProperties[] = [
	{
		displayName: 'UUID',
		name: 'uuid',
		default: 'uuid.v4()',
		description: '/ping/&lt;UUID&gt;/fail',
		displayOptions: {
			show: {
				resource: ['by_uuid'],
				operation: ['fail'],
			},
		},
		type: 'string',
		required: true,
	},
];
const logOperation: INodeProperties[] = [
	{
		displayName: 'UUID',
		name: 'uuid',
		default: 'uuid.v4()',
		description: '/ping/&lt;UUID&gt;/log',
		displayOptions: {
			show: {
				resource: ['by_uuid'],
				operation: ['log'],
			},
		},
		type: 'string',
		required: true,
	},
];


export const httpVerbFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                httpVerb:get                                */
	/* -------------------------------------------------------------------------- */
	...pingOperation,
	...startOperation,
	...failOperation,
	...logOperation
];
