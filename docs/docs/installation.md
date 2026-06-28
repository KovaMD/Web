# Installation

Kova is a native desktop application for macOS, Windows, and Linux. Download the latest release from the [Releases page](https://github.com/KovaMD/Kova/releases) and follow the instructions for your platform below.

---

## macOS

=== "Download"

    1. Download the `.dmg` file from the [Releases page](https://github.com/KovaMD/Kova/releases).
    2. Open the `.dmg` and drag **Kova.app** into your Applications folder.
    3. Launch Kova from Applications or Spotlight.

!!! tip "Universal binary"
    The `.dmg` is a universal binary — the same file runs natively on both **Apple Silicon** (M1/M2/M3/M4) and **Intel** Macs. No separate downloads needed.

!!! success "Signed and notarised"
    Kova is signed and notarised by Apple. You will not see any security warning on first launch.

---

## Windows

=== "Installer (.msi)"

    1. Download the `.msi` file from the [Releases page](https://github.com/KovaMD/Kova/releases).
    2. Run the installer and follow the prompts.

=== "Setup (.exe)"

    1. Download the `_x64-setup.exe` file from the [Releases page](https://github.com/KovaMD/Kova/releases).
    2. Run the setup executable and follow the prompts.

!!! warning "Windows SmartScreen"
    Because Kova is not yet code-signed for Windows, SmartScreen may show a **"Windows protected your PC"** warning.

    To proceed: click **More info** → **Run anyway**.

    This warning will disappear once Kova acquires a Windows code-signing certificate.

---

## Linux

=== "Debian 13+"

    ```bash
    sudo curl -fsSL https://deb.kova.md/key.gpg \
      | sudo gpg --dearmor -o /etc/apt/keyrings/kova.gpg

    sudo tee /etc/apt/sources.list.d/kova.sources > /dev/null << EOF
    Types: deb
    URIs: https://deb.kova.md
    Suites: stable
    Components: main
    Signed-By: /etc/apt/keyrings/kova.gpg
    EOF

    sudo apt update && sudo apt install kova
    ```

=== "Ubuntu / older Debian"

    ```bash
    sudo curl -fsSL https://deb.kova.md/key.gpg \
      | sudo gpg --dearmor -o /etc/apt/keyrings/kova.gpg

    echo "deb [signed-by=/etc/apt/keyrings/kova.gpg] https://deb.kova.md stable main" \
      | sudo tee /etc/apt/sources.list.d/kova.list

    sudo apt update && sudo apt install kova
    ```

=== "Fedora / RHEL / CentOS Stream"

    ```bash
    sudo rpm --import https://rpm.kova.md/key.gpg
    sudo curl -o /etc/yum.repos.d/kova.repo https://rpm.kova.md/kova.repo
    sudo dnf install kova
    ```

=== "openSUSE"

    ```bash
    sudo rpm --import https://rpm.kova.md/key.gpg
    sudo curl -o /etc/zypp/repos.d/kova.repo https://rpm.kova.md/kova.repo
    sudo zypper refresh && sudo zypper install kova
    ```

=== "AppImage"

    1. Download the `.AppImage` file.
    2. Make it executable:

        ```bash
        chmod +x Kova_*.AppImage
        ```

    3. Run it:

        ```bash
        ./Kova_*.AppImage --no-sandbox
        ```

    !!! warning "No automatic updates"
        The AppImage release does **not** currently support automatic in-app updates. Check the [Releases page](https://github.com/KovaMD/Kova/releases) manually for new versions. This is a known limitation tracked in [issue #3](https://github.com/KovaMD/Kova/issues/3).

    !!! note "AppImageLauncher"
        For desktop integration (application menu entry, file associations), install [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) and double-click the AppImage.

    **System requirements for AppImage:** GTK/WebKit desktop environment, `fontconfig`.

---

## Building from source

See the [Contributing](contributing.md) page for full instructions on cloning the repo, installing dependencies, and running a development build.

---

## Verifying your version

After installing, open Kova and check **Settings → Updates** to see the installed version and optionally enable automatic update checks.
