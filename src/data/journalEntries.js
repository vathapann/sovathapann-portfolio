export const journalEntries = [
  {
    title: "Hardening a Django App behind Nginx & Docker",
    description:
      "Notes about using host network, reverse proxies, and secure firewall rules on a 512MB droplet.",
    date: "28 Nov 2025",
    minutes: 5,
    views: 1240,
    slug: "hardening-django-nginx-docker",
    content: [
      "I deployed a small Django app to a 512MB droplet and wanted the simplest, safest network story. I avoided exposing random ports by putting everything behind Nginx and only opening 80/443 on the firewall. Docker ran in host networking mode so Nginx could talk to Gunicorn over the loopback interface without extra bridge interfaces to secure.",
      "With host networking, UFW only needed to allow 80/443 and deny everything else. I also disabled the default Docker iptables rules (`--iptables=false`) so Docker wouldn't punch holes I didn't control. Nginx terminated TLS, forwarded to Gunicorn via a Unix socket, and set the right proxy headers to keep HTTPS redirects clean.",
      "For TLS, I used Let's Encrypt with a systemd timer that renews twice a day. HSTS is enabled with a conservative `max-age` and `includeSubDomains`. I pinned modern ciphers and enabled OCSP stapling to avoid slow validations.",
      "Observability on a tiny box matters: journald rate limits were tightened to stop log spam, Gunicorn access logs were kept, and Nginx error logs were shipped to a remote bucket once a day. A `curl -f http://localhost/healthz` systemd watchdog gives an early alert if the app or Nginx misbehaves.",
      "Key takeaway: on tiny servers, host networking plus a strict firewall can be safer and simpler than default Docker bridges. Keep the exposed surface to 80/443, terminate TLS at the edge, and lock down the defaults Docker would normally create for you."
    ],
  },
  {
    title: "Reflection: First Semester of Master of IT",
    description:
      "Key lessons from software engineering, cloud computing, and research preparation.",
    date: "10 Nov 2025",
    minutes: 4,
    views: 890,
    slug: "reflection-first-semester-mit",
    content: [
      "My first semester in the Master of IT was a crash course in translating theory into systems that actually ship. Software engineering forced me to think in terms of testable slices instead of big-bang features. I rewired my habits around writing contracts first, then layering the UI, API, and database behind those guarantees.",
      "Cloud computing labs were the most hands-on: building VPCs from scratch, configuring subnets, and measuring how NAT, gateways, and routing tables actually behave. The big lesson was that most outages came from missing IAM permissions and miswired security groups, not the code itself.",
      "Research preparation helped me frame technical work as testable hypotheses. I now write one-liner hypotheses before exploring a new tool (e.g., “Container image signing will add <5% to build times”). It keeps experiments small and makes the results easier to defend.",
      "Overall, the semester made me faster at moving from idea to deployable artifact. Tests-first habits, ruthless scoping, and a bias for measurement are sticking around for future projects."
    ],
  },
];
