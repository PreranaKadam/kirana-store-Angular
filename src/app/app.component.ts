import { Component } from '@angular/core';
interface StockItem {
  item: string;
  description: string;
  dateBrought: string;
  stock: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'kirana-store-app';
  stockItems: StockItem[] = [
    {
      "item": "T-shirt",
      "description": "Cotton crew neck T-shirt in black",
      "dateBrought": "2023-06-18",
      "stock": 50
    },
    {
      "item": "Jeans",
      "description": "Slim-fit denim jeans in blue",
      "dateBrought": "2023-06-15",
      "stock": 30
    },
    {
      "item": "Sneakers",
      "description": "Running shoes with breathable mesh",
      "dateBrought": "2023-06-20",
      "stock": 20
    },
    {
      "item": "Dress",
      "description": "Floral-printed sundress",
      "dateBrought": "2023-06-12",
      "stock": 15
    }
  ];
  editMode: { [key: string]: boolean } = {};

  newItem = {
    item: '',
    description: '',
    dateBrought: '',
    stock: 0
  };

  addItem() {
    if (!this.newItem.item || !this.newItem.description ||
      !this.newItem.dateBrought || !this.newItem.stock) {
      alert('Please fill in all the fields before adding the item.');
      return;
    }
    this.stockItems.push({ ...this.newItem });
    this.newItem.item = '';
    this.newItem.description = '';
    this.newItem.dateBrought = '';
    this.newItem.stock = 0;
  }

  editItem(item: any) {
    const editedItem = { ...item };
    const newName = prompt('Enter the new name:', editedItem.item);
    const newDescription = prompt('Enter the new description:', editedItem.description);

    if (newName && newDescription) {
      editedItem.item = newName;
      editedItem.description = newDescription;
      const index = this.stockItems.indexOf(item);
      this.stockItems[index] = editedItem;
    }
  }

  saveItem(item: StockItem) {
    delete this.editMode[item.item];
  }

  toggleEditMode(itemKey: string) {
    this.editMode[itemKey] = !this.editMode[itemKey];
  }

  deleteItem(item: StockItem) {
    const index = this.stockItems.indexOf(item);
    if (index !== -1) {
      this.stockItems.splice(index, 1);
      console.log(`Item deleted: ${item.item}`);
    }
  }
}
