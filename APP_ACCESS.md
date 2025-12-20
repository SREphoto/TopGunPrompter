# 🌐 Application Access & Port Registry

## 🚀 Current Context: TopGunPrompter

* **Local URL**: [http://localhost:3020](http://localhost:3020)
* **Network URL**: [http://192.168.1.119:3020](http://192.168.1.119:3020) (Accessible via LAN)
* **Frontend Port**: `3020`
* **Backend Port**: `-`

---

## 📒 Master Port Registry (Project Specific)

| Application Name | Frontend Port | Backend Port | Port Details | Description |
|------------------|---------------|--------------|--------------|-------------|
| **TopGunPrompter** | 3020 | - | 3020: Frontend (Vite) | Midjourney Prompt Engine |

---

### 🛠️ External Access Instructions

1. **Vite Config**: The server is configured with `host: true` and `port: 3020` in `vite.config.ts`.
2. **LAN Access**: Use the **Network URL** above from any device on the same Wi-Fi.
3. **Outside LAN**:
    * **Option 1 (Tunnel)**: Use `npx localtunnel --port 3020` or a similar service.
    * **Option 2 (Port Forwarding)**: Forward port `3020` on your router to `192.168.1.119`.
