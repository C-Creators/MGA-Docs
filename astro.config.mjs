// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.mygptassistants.com',
	server: {
		port: 4329, // Uncommon port to avoid conflicts with other local apps
	},
	integrations: [
		starlight({
			plugins: [
				// Auto-generates the full REST/SDK API reference from the vendored
				// @mygpt/sdk OpenAPI spec. Refresh it with `npm run sync:openapi`.
				starlightOpenAPI([
					{
						base: 'sdk/api',
						label: 'SDK · API Reference',
						schema: './src/openapi/mga-sdk.json',
						collapsed: true,
					},
				]),
			],
			title: 'MyGPTAssistants Documentation',
			description: 'Complete guide to MyGPTAssistants platform - AI Assistants and CRM tools',
			logo: {
				light: './src/assets/mga-logo.png',
				dark: './src/assets/mga-logo-light.png',
				replacesTitle: true,
			},
			// Custom theme matching MyGPTAssistants app
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/wp-plugin-replica.css',
				'./src/styles/mga-app-replica.css',
			],
			// i18n configuration - English (root) and Spanish
			// Using root locale so English pages serve at / without prefix
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			social: [
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mygptassistants' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/my-gpt-assistants/' },
				{ icon: 'email', label: 'Email', href: 'mailto:info@mygptassistants.com' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/subscription-plans' },
					],
				},
				{
					label: 'WordPress Plugin',
					translations: { es: 'Plugin de WordPress' },
					items: [
						{
							slug: 'wordpress/overview',
							label: 'Overview',
							translations: { es: 'Resumen' },
						},
						{
							slug: 'wordpress/install',
							translations: { es: 'Instalar el plugin' },
						},
						{
							slug: 'wordpress/customize-bot',
							translations: { es: 'Personalizar el chat' },
						},
						{
							slug: 'wordpress/embed-shortcode',
							translations: { es: 'Shortcode de incrustación' },
						},
						{
							slug: 'wordpress/require-wp-login',
							translations: { es: 'Requerir login de WordPress' },
						},
						{
							slug: 'wordpress/floating-widget',
							translations: { es: 'Widget flotante' },
						},
					],
				},
				{
					label: 'Assistants',
					items: [
						{ slug: 'assistants/overview', label: 'Overview' },
						{ slug: 'assistants/playground' },
						{ slug: 'assistants/appearance' },
						{ slug: 'assistants/integrations' },
						{ slug: 'assistants/analytics' },
						{ slug: 'assistants/conversations' },
						{ slug: 'assistants/settings' },
						{ slug: 'assistants/data-sources' },
						{ slug: 'assistants/plugins' },
						{ slug: 'assistants/agent-framework' },
						{ slug: 'assistants/wordpress-plugin' },
						{ slug: 'assistants/search' },
						{ slug: 'assistants/embed' },
					],
				},
				{
					label: 'CRM',
					items: [
						{ slug: 'crm/overview', label: 'Overview' },
						{ slug: 'crm/contacts' },
						{ slug: 'crm/leads' },
						{ slug: 'crm/appointments' },
						{ slug: 'crm/tasks' },
						{ slug: 'crm/customer-support' },
						{ slug: 'crm/tickets' },
						{ slug: 'crm/campaigns' },
						{ slug: 'crm/live-escalation' },
						{ slug: 'crm/segments' },
						{ slug: 'crm/pipelines' },
						{ slug: 'crm/workflows' },
						{ slug: 'crm/reports' },
					],
				},
				// Developer reference, nested and collapsed.
				//
				// These three groups (API Reference, TypeScript SDK and the generated
				// endpoint reference) used to sit at the TOP level, where they
				// outnumbered the product documentation and pushed it out of view for
				// readers who never touch the API. Nesting them under one collapsed
				// entry keeps the reference a click away without letting it dominate
				// the sidebar.
				{
					label: 'Developers',
					translations: { es: 'Desarrolladores' },
					collapsed: true,
					items: [
						{
							label: 'API Reference',
							translations: { es: 'Referencia de la API' },
							items: [
								{ slug: 'api/overview', label: 'Overview' },
								{ slug: 'api/authentication' },
								{ slug: 'api/chat-api' },
								{ slug: 'api/webhooks' },
							],
						},
						{
							label: 'TypeScript SDK',
							translations: { es: 'SDK de TypeScript' },
							items: [
								{ slug: 'sdk/overview', label: 'Overview' },
								{ slug: 'sdk/typed-client' },
								{ slug: 'sdk/axios-client' },
								{ slug: 'sdk/dtos' },
								{ slug: 'sdk/errors' },
								{ slug: 'sdk/realtime' },
							],
						},
						// Generated, one group per configured schema.
						...openAPISidebarGroups,
					],
				},
				{
					label: 'Legal',
					items: [
						{ slug: 'legal/overview', label: 'Overview' },
						{ slug: 'legal/terms-of-service' },
						{ slug: 'legal/privacy-policy' },
						{ slug: 'legal/data-protection' },
					],
				},
			],
		}),
	],
});
