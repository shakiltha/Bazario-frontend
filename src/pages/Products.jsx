import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
const Products = () => {
  return (
    <div className="min-h-screen">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "black",
            height: "100vh",
          },
        }}
      >
        <Menu>
          <SubMenu label="Fish">
            <MenuItem> Fish </MenuItem>
            <MenuItem>Dry-Fish </MenuItem>
          </SubMenu>
          <SubMenu label="Meat">
            <MenuItem>Beef</MenuItem>
            <MenuItem>Chicken</MenuItem>
            <MenuItem>Duck</MenuItem>
            <MenuItem>Mutton</MenuItem>
            <MenuItem>Bird</MenuItem>
          </SubMenu>
          <SubMenu label="Fruits">
            <MenuItem>Local Fruits</MenuItem>
            <MenuItem>Imported Fruits</MenuItem>
          </SubMenu>
          <SubMenu label="Vegetables">
            <MenuItem>Local Vegetables</MenuItem>
            <MenuItem>Imported Vegetables</MenuItem>
          </SubMenu>
          <SubMenu label="Dairy">
            <MenuItem>Borhani</MenuItem>
            <MenuItem>Butter</MenuItem>
            <MenuItem>Cheese</MenuItem>
            <MenuItem>Curd</MenuItem>
            <MenuItem>Ice Cream</MenuItem>
            <MenuItem>Yogurt</MenuItem>
          </SubMenu>
          <SubMenu label="Frozen">
            <MenuItem>Sea Foods</MenuItem>
            <MenuItem>Snacks</MenuItem>
          </SubMenu>
          <SubMenu label="Grocery">
            <MenuItem>Cookies</MenuItem>
            <MenuItem>Biscuits</MenuItem>
            <MenuItem>Candies</MenuItem>
            <MenuItem>Rice</MenuItem>
            <MenuItem>Sugar</MenuItem>
            <MenuItem>Vinegar</MenuItem>
            <MenuItem>Cooking Oil</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Products;
