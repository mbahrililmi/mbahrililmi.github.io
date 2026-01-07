// ===============================
// CONTACT MANAGEMENT SYSTEM
// ===============================

class ContactManager {
  constructor() {
    this.contacts = [];
    this.isAdminMode = false;
    this.init();
  }

  init() {
    console.log("ContactManager initialized");
    this.loadContacts();
    this.setupFormHandler();
    this.setupAdminPanel();
    this.setupKeyboardShortcuts();
  }

  // Load contacts from localStorage (simulating JSON file)
  loadContacts() {
    try {
      const savedContacts = localStorage.getItem("portfolio_contacts");
      this.contacts = savedContacts ? JSON.parse(savedContacts) : [];
    } catch (error) {
      console.error("Error loading contacts:", error);
      this.contacts = [];
    }
  }

  // Save contacts to localStorage (simulating JSON file)
  saveContacts() {
    try {
      localStorage.setItem("portfolio_contacts", JSON.stringify(this.contacts));
      this.saveToJsonFile(); // Also save to downloadable JSON
      return true;
    } catch (error) {
      console.error("Error saving contacts:", error);
      return false;
    }
  }

  // Save contacts to downloadable JSON file
  saveToJsonFile() {
    try {
      const jsonData = JSON.stringify(this.contacts, null, 2);
      // Create blob and download link
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Auto-download (optional, can be triggered manually)
      // Uncomment below lines if you want auto-download on every save
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = 'contacts.json';
      // a.click();
      // URL.revokeObjectURL(url);

      console.log("Contact data ready for download");
    } catch (error) {
      console.error("Error creating JSON file:", error);
    }
  }

  // Add new contact
  addContact(contactData) {
    const contact = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      name: contactData.nama,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.pesan,
      status: "new",
    };

    this.contacts.unshift(contact); // Add to beginning of array
    return this.saveContacts();
  }

  // Get all contacts
  getAllContacts() {
    return this.contacts;
  }

  // Setup form submission handler
  setupFormHandler() {
    const form = document.querySelector(".contact-form");
    const btnKirim = document.querySelector(".btn-kirim");
    const btnLoading = document.querySelector(".btn-loading");
    const alertElement = document.querySelector(".my-alert");

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Show loading state
        btnKirim.classList.add("d-none");
        btnLoading.classList.remove("d-none");

        // Get form data
        const formData = new FormData(form);
        const contactData = Object.fromEntries(formData.entries());

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Save contact
        const success = this.addContact(contactData);

        if (success) {
          // Show success message
          alertElement.classList.remove("d-none");
          alertElement.innerHTML = `
            <strong>Thank you ${contactData.nama}!</strong> Your message has been sent successfully.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          `;

          // Reset form
          form.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            alertElement.classList.add("d-none");
          }, 5000);
        } else {
          // Show error message
          alertElement.classList.remove("d-none");
          alertElement.className =
            "alert alert-danger alert-dismissible fade show";
          alertElement.innerHTML = `
            <strong>Error!</strong> Failed to send message. Please try again.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          `;
        }

        // Reset button state
        btnKirim.classList.remove("d-none");
        btnLoading.classList.add("d-none");
      });
    }
  }

  // Setup admin panel
  setupAdminPanel() {
    console.log("Setting up admin panel");
    // Create admin login modal
    this.createAdminModal();
  }

  createAdminModal() {
    const modalHTML = `
      <div class="modal fade" id="adminModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Admin Access</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form id="adminLoginForm">
                <div class="mb-3">
                  <label for="adminUsername" class="form-label">Username</label>
                  <input type="text" class="form-control" id="adminUsername" required>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Access Admin Panel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="contactsModal" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Contact Messages</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div id="contactsList">
                <!-- Contacts will be loaded here -->
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Setup admin login form
    const adminForm = document.getElementById("adminLoginForm");
    adminForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("adminUsername").value;

      if (username === "heavenly-demon") {
        this.isAdminMode = true;
        bootstrap.Modal.getInstance(
          document.getElementById("adminModal")
        ).hide();
        this.showContactsPanel();
      } else {
        alert("Invalid username!");
      }
    });
  }

  // Setup keyboard shortcuts for admin access
  setupKeyboardShortcuts() {
    console.log("Setting up keyboard shortcuts");

    // Add keyboard shortcut (Ctrl + Alt + A) for secure admin access
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.altKey && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
        console.log("Admin keyboard shortcut triggered! (Ctrl+Alt+A)");

        // Show admin modal directly
        const modal = new bootstrap.Modal(
          document.getElementById("adminModal")
        );
        modal.show();
      }
    });

    console.log("Keyboard shortcut (Ctrl+Alt+A) activated for admin access");
  }

  showContactsPanel() {
    const contactsList = document.getElementById("contactsList");
    const contacts = this.getAllContacts();

    if (contacts.length === 0) {
      contactsList.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-inbox display-1 text-muted"></i>
          <h4 class="mt-3">No contacts yet</h4>
          <p class="text-muted">No contact messages have been received.</p>
        </div>
      `;
    } else {
      const contactsHTML = contacts
        .map(
          (contact) => `
        <div class="card mb-3">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h6 class="mb-0">${contact.name} - ${contact.subject}</h6>
            <small class="text-muted">${new Date(
              contact.timestamp
            ).toLocaleString()}</small>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <strong>Email:</strong> ${contact.email}
              </div>
              <div class="col-md-6">
                <strong>Status:</strong> 
                <span class="badge bg-${
                  contact.status === "new" ? "primary" : "success"
                }">${contact.status}</span>
              </div>
            </div>
            <div class="mt-3">
              <strong>Message:</strong>
              <p class="mt-2">${contact.message}</p>
            </div>
            <div class="text-end">
              <button class="btn btn-sm btn-outline-danger" onclick="contactManager.deleteContact('${
                contact.id
              }')">
                <i class="bi bi-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      `
        )
        .join("");

      contactsList.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h5>Total Contacts: ${contacts.length}</h5>
          <div>
            <button class="btn btn-outline-success btn-sm me-2" onclick="contactManager.downloadContacts()">
              <i class="bi bi-download"></i> Download JSON
            </button>
            <button class="btn btn-outline-primary btn-sm me-2" onclick="contactManager.uploadContacts()">
              <i class="bi bi-upload"></i> Upload JSON
            </button>
            <button class="btn btn-outline-danger btn-sm" onclick="contactManager.clearAllContacts()">
              <i class="bi bi-trash"></i> Clear All
            </button>
          </div>
        </div>
        <input type="file" id="uploadJsonFile" accept=".json" style="display: none" onchange="contactManager.handleFileUpload(event)">
        ${contactsHTML}
      `;
    }

    const modal = new bootstrap.Modal(document.getElementById("contactsModal"));
    modal.show();
  }

  deleteContact(id) {
    if (confirm("Are you sure you want to delete this contact?")) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
      this.saveContacts();
      this.showContactsPanel(); // Refresh the panel
    }
  }

  clearAllContacts() {
    if (
      confirm(
        "Are you sure you want to delete ALL contacts? This action cannot be undone."
      )
    ) {
      this.contacts = [];
      this.saveContacts();
      this.showContactsPanel(); // Refresh the panel
    }
  }

  // Download contacts as JSON file
  downloadContacts() {
    try {
      const jsonData = JSON.stringify(this.contacts, null, 2);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `contacts_${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      console.log("Contacts downloaded successfully");
      alert("Contacts downloaded successfully!");
    } catch (error) {
      console.error("Error downloading contacts:", error);
      alert("Error downloading contacts!");
    }
  }

  // Trigger file upload
  uploadContacts() {
    document.getElementById("uploadJsonFile").click();
  }

  // Handle file upload
  handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          if (Array.isArray(jsonData)) {
            if (
              confirm("This will replace all current contacts. Are you sure?")
            ) {
              this.contacts = jsonData;
              this.saveContacts();
              this.showContactsPanel(); // Refresh the panel
              alert("Contacts uploaded successfully!");
            }
          } else {
            alert("Invalid JSON format! Expected an array of contacts.");
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Error parsing JSON file!");
        }
      };
      reader.readAsText(file);
    } else {
      alert("Please select a valid JSON file!");
    }
    // Reset file input
    event.target.value = "";
  }
}

// Initialize contact manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing ContactManager");
  window.contactManager = new ContactManager();
}); // Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = ContactManager;
}
