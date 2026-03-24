import type { ui } from '../i18n/ui';

export function getProjects(t: (key: keyof typeof ui.it) => string) {
  return [
    {
      title: 'Cloud Image Management System',
      description: t('project.1.description'),
      tech: ['Python', 'Django', 'Celery', 'Redis', 'Docker'],
    },
    {
      title: 'VPC Management Platform',
      description: t('project.2.description'),
      tech: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Django', 'Docker', 'GitLab CI/CD'],
    },
    {
      title: 'RPC Worker API',
      description: t('project.3.description'),
      tech: ['Go', 'JWT', 'Celery', 'Django'],
    },
    {
      title: 'Kubernetes & Infrastructure Stack',
      description: t('project.4.description'),
      tech: ['Kubernetes', 'Traefik', 'Go', 'Prometheus', 'Rocky Linux'],
    },
    {
      title: 'Identity & Access Management',
      description: t('project.5.description'),
      tech: ['Keycloak', 'OIDC', 'Python', 'PHP'],
    },
    {
      title: 'SSO & Composable Frontend',
      description: t('project.6.description'),
      tech: ['postRobot', 'iframe', 'SSO', 'TypeScript', 'SvelteKit'],
    },
  ];
}
