import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UIComponent implements OnInit {
  items: MenuItem[] | undefined;
  showProductDialog: boolean = false;
  showEditProductDialog: boolean = false;
  
  Products: any[] = [];
  Models: any[] = [];
  Version: any[] = [];
  selectedProduct: any;
  editedProduct: any = {};


 hideProductDialog() {
    this.showProductDialog = false; // Close the Product dialog
  }
  editProduct(product: any) {
    this.selectedProduct = product;
    this.editedProduct = { ...product }; // Initialize the edited product
    this.showEditProductDialog = true;
  }

  openProductEditDialog() {
    this.showEditProductDialog = true;
  }



  saveProductChanges() {
    // Add your save logic here
    this.showProductDialog = false; // Close the dialog after saving
  }
// Function to cancel product edit and close the dialog
cancelProductEdit() {
  this.showProductDialog = false; // Close the dialog without saving
}



  minimizeProductDialog() {
    // Implement minimize logic here
    // For example: reduce dialog height or width
  }

  maximizeProductDialog() {
    
  }

  refreshProductDialog() {
    // Implement refresh logic here
    // For example: reload product data
  }

 

  

  
  ngOnInit() {
    this.items = [
      // Define your menu items
      {
        label: 'Administration',
        icon: 'pi pi-user',
        items: [
          // Submenu items here
          {
            label: 'Master Date',
          },
          {
            label: 'Client',
          },
          {
            label: 'User Registration',
          },
          {
            label: 'User List',
          },
          {
            label: 'Product',
            command: () => (this.showProductDialog = true), // Open the product dialog
          },
          {
            label: 'Client Products',
          },
          {
            label: 'Realease Note',
          },
          {
            label: 'System Settings',
          },
        ],
      },
      {
        label: 'Client products',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
        ],
      },
      {
        label: 'Service',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Service do',
            icon: 'pi pi-fw pi-calendar-plus',
          },
        ],
      },
      {
        label: 'QA',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus',
          },
        ],
      },
      {
        label: 'Reports',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Report show',
            icon: 'pi pi-fw pi-calendar-minus',
          },
        ],
      },
    ];

    // Load your product data here using a service
    // For example:
    //productService.getProducts().subscribe((data) => {
    //   this.Products = data;
    // });
  }
}
