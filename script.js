
//Using OOP

class ProductManager {
  constructor() {
    this.products = [];
    this.updatedIndex = null;

    // Elements
    this.nameInput = document.getElementById("productName");
    this.priceInput = document.getElementById("productPrice");
    this.categoryInput = document.getElementById("productCategory");
    this.imageInput = document.getElementById("productImage");
    this.body = document.getElementById("Body");
    this.addBtn = document.getElementById("addBtn");
    this.updateBtn = document.getElementById("updateBtn");

    // Events
    this.addBtn.onclick = () => this.addProduct();
    this.updateBtn.onclick = () => this.updateProduct();
  }

  addProduct() {
    const product = {
      name: this.nameInput.value,
      price: this.priceInput.value,
      category: this.categoryInput.value,
      image: './images/Apple iPhone 16 Pro 256GB Titânio Natural _ _….jpg',
    };

    this.products.push(product);
    this.clearForm();
    this.display();
  }

  clearForm() {
    this.nameInput.value = "";
    this.priceInput.value = "";
    this.categoryInput.value = "";
    this.imageInput.value = "";
  }

  display() {
    let content = "";
    this.products.forEach((product, i) => {
      content += `
        <tr>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.category}</td>
          <td><img src="${product.image}" alt="${product.name}" width="100"></td>
          <td>
            <button class="delete-btn text-danger" onclick="manager.deleteProduct(${i})">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
          <td>
            <button class="update-icon" onclick="manager.setFormForUpdate(${i})">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </td>
        </tr>
      `;
    });
    this.body.innerHTML = content;
  }

  deleteProduct(index) {
    this.products.splice(index, 1);
    this.display();
  }

  setFormForUpdate(index) {
    this.updatedIndex = index;

    this.addBtn.classList.add("d-none");
    this.updateBtn.classList.remove("d-none");

    const product = this.products[index];
    this.nameInput.value = product.name;
    this.priceInput.value = product.price;
    this.categoryInput.value = product.category;
    this.imageInput.value = product.image;
  }

  updateProduct() {
    this.addBtn.classList.remove("d-none");
    this.updateBtn.classList.add("d-none");

    this.products[this.updatedIndex] = {
      name: this.nameInput.value,
      price: this.priceInput.value,
      category: this.categoryInput.value,
      image: './images/Apple iPhone 16 Pro 256GB Titânio Natural _ _….jpg',
    };

    this.clearForm();
    this.display();
  }
}

// Create the manager object after DOM is ready
const manager = new ProductManager();
