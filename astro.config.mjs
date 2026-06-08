// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.mygptassistants.com',
	server: {
		port: 4329, // Uncommon port to avoid conflicts with other local apps
	},
	integrations: [
		starlight({
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
					items: [
						{ slug: 'wordpress/overview', label: 'Overview' },
						{ slug: 'wordpress/install' },
						{ slug: 'wordpress/customize-bot' },
						{ slug: 'wordpress/embed-shortcode' },
						{ slug: 'wordpress/require-wp-login' },
						{ slug: 'wordpress/floating-widget' },
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
						{ slug: 'crm/tickets' },
						{ slug: 'crm/campaigns' },
						{ slug: 'crm/live-escalation' },
						{ slug: 'crm/segments' },
						{ slug: 'crm/pipelines' },
						{ slug: 'crm/workflows' },
						{ slug: 'crm/reports' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ slug: 'api/overview', label: 'Overview' },
						{ slug: 'api/authentication' },
						{ slug: 'api/chat-api' },
						{ slug: 'api/webhooks' },
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
