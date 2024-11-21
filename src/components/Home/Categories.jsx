import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarContent,
  NavItem,
  DropDown,
} from "responsive-navigation";
const Categories = () => {
  return (
    <div className="w-3/4 mx-auto">
      <Navbar
        style={{
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <NavbarContent>
          <DropDown label={"Fish"} style={{ width: "150px" }}>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/fish/dry-fish"}
              >
                Dry-Fish
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/fish/fish"}
              >
                <p>Fish</p>
              </NavLink>
            </NavItem>
          </DropDown>
          <DropDown label={"Meat"} style={{ width: "150px" }}>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/meat/beef"}
              >
                Beef
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/meat/chicken"}
              >
                Chicken
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/meat/duck"}
              >
                Duck
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/meat/mutton"}
              >
                Mutton
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/meat/bird"}
              >
                Bird
              </NavLink>
            </NavItem>
          </DropDown>
          <DropDown label={"Fruits"} style={{ width: "150px" }}>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/fruits/local-fruits"}
              >
                Local Fruits
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/fruits/imported-fruits"}
              >
                Importd Fruits
              </NavLink>
            </NavItem>
          </DropDown>
          <DropDown label={"Vegetables"} style={{ width: "150px" }}>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/vegetables/local-vegetables"}
              >
                Local Vegetables
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/vegetables/imported-vegetables"}
              >
                Importd Vegetables
              </NavLink>
            </NavItem>
          </DropDown>
          <DropDown label={"Dairy"} style={{ width: "150px" }}>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/dairy/borhani"}
              >
                Borhani
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/dairy/butter"}
              >
                Butter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/dairy/cheese"}
              >
                Cheese
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/dairy/curd"}
              >
                Curd
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/dairy/ice-cream"}
              >
                Ice Cream
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/dairy/yogurt"}
              >
                Yogurt
              </NavLink>
            </NavItem>
          </DropDown>
          <DropDown label={"Frozen"} style={{ width: "150px" }}>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/frozen/sea-foods"}
              >
                Sea Foods
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/frozen/snacks"}
              >
                Snack
              </NavLink>
            </NavItem>
          </DropDown>
          <DropDown label={"Grocery"} style={{ width: "150px" }}>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/grocery/cookies"}
              >
                Cookies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/grocery/biscuits"}
              >
                Biscuit
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/grocery/candies"}
              >
                Candie
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/grocery/rice"}
              >
                Rice
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/grocery/sugar"}
              >
                Sugar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/grocery/vinegar"}
              >
                Vinegar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                to={"/grocery/cooking-oil"}
              >
                Cooking Oil
              </NavLink>
            </NavItem>
          </DropDown>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Categories;
