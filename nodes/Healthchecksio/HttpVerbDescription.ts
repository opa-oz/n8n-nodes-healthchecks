import { INodeProperties } from 'n8n-workflow';

// When the resource `ping` is selected, this `operation` parameter will be shown.
export const httpVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['ping'],
			},
		},
		options: [
			{
				name: 'GET',
				value: 'get',
				action: 'Ping',
				routing: {
					request: {
						method: 'GET',
						url: '=/ping/{{$parameter.uuid}}',
					},
				},
			},
		],
		default: 'get',
	},
];

// Here we define what to show when the `get` operation is selected.
// We do that by adding `operation: ["get"]` to `displayOptions.show`
const getOperation: INodeProperties[] = [
	{
		displayName: 'UUID',
		name: 'uuid',
		default: 'uuid.v4()',
		description: 'Https?://.../ping/&lt;UUID&gt;',
		displayOptions: {
			show: {
				resource: ['ping'],
				operation: ['get'],
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
	...getOperation,
];
