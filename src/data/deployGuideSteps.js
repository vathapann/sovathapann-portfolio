export const deployGuideSteps = [
  {
    id: "provision",
    title: "Provision & Update",
    icon: "server",
    summary: "Start with a fresh Ubuntu 22.04 LTS VM and a non-root sudo user.",
    bullets: [
      {
        id: "packages",
        segments: [
          { type: "text", value: "Refresh packages: " },
          { type: "code", value: "sudo apt update && sudo apt upgrade -y" },
        ],
      },
      {
        id: "firewall",
        segments: [
          { type: "text", value: "Enable firewall and open required ports: " },
          {
            type: "code",
            value: "sudo ufw allow OpenSSH && sudo ufw allow 80,443/tcp && sudo ufw enable",
          },
        ],
      },
      {
        id: "ssh-harden",
        segments: [
          {
            type: "text",
            value: "Harden SSH: disable root login and use keys in ",
          },
          { type: "code", value: "/etc/ssh/sshd_config" },
          { type: "text", value: ", then restart sshd." },
        ],
      },
    ],
  },
  {
    id: "runtime",
    title: "Install Runtime",
    icon: "code",
    summary: "Install Docker and common tooling to run your app.",
    bullets: [
      {
        id: "docker-install",
        segments: [
          { type: "text", value: "Install Docker: " },
          { type: "code", value: "curl -fsSL https://get.docker.com | sh" },
          { type: "text", value: ", then " },
          { type: "code", value: "sudo usermod -aG docker $USER" },
          { type: "text", value: "." },
        ],
      },
      {
        id: "docker-verify",
        segments: [
          { type: "text", value: "Verify Docker runs: " },
          { type: "code", value: "docker run hello-world" },
          { type: "text", value: "." },
        ],
      },
      {
        id: "tooling",
        segments: [
          { type: "text", value: "Install git/node if you build on-box: " },
          { type: "code", value: "sudo apt install -y git nodejs npm" },
          { type: "text", value: "." },
        ],
      },
    ],
  },
  {
    id: "proxy",
    title: "Reverse Proxy + TLS",
    icon: "globe",
    summary: "Put Nginx in front to serve the site and handle certificates.",
    bullets: [
      {
        id: "nginx",
        segments: [
          { type: "text", value: "Install Nginx and Certbot: " },
          { type: "code", value: "sudo apt install -y nginx certbot python3-certbot-nginx" },
          { type: "text", value: "." },
        ],
      },
      {
        id: "certbot",
        segments: [
          { type: "text", value: "Point your DNS A record to the server IP, then request TLS: " },
          { type: "code", value: "sudo certbot --nginx -d yourdomain.com" },
          { type: "text", value: "." },
        ],
      },
      {
        id: "proxy-config",
        segments: [
          { type: "text", value: "Create a site config that proxies to your app on " },
          { type: "code", value: "http://127.0.0.1:3000" },
          { type: "text", value: " (or your container port) and enables " },
          { type: "code", value: "proxy_set_header" },
          { type: "text", value: " for host/IP forwarding." },
        ],
      },
    ],
  },
  {
    id: "deploy",
    title: "Deploy & Harden",
    icon: "shield",
    summary: "Ship the app, keep it running, and monitor it.",
    bullets: [
      {
        id: "compose",
        segments: [
          { type: "text", value: "Run your containers with a systemd unit or " },
          { type: "code", value: "docker compose up -d" },
          { type: "text", value: " so they auto-start on reboot." },
        ],
      },
      {
        id: "healthcheck",
        segments: [
          { type: "text", value: "Add a basic health check endpoint and configure " },
          { type: "code", value: "/healthz" },
          { type: "text", value: " probes in Nginx or your load balancer." },
        ],
      },
      {
        id: "monitoring",
        segments: [
          { type: "text", value: "Monitor logs with " },
          { type: "code", value: "journalctl -u your-service" },
          { type: "text", value: " and set up automatic security updates via " },
          { type: "code", value: "unattended-upgrades" },
          { type: "text", value: "." },
        ],
      },
    ],
  },
];
