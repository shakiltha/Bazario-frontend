import { FaFish, FaLeaf } from "react-icons/fa";
import { GiButter, GiFlatfish, GiFruitBowl } from "react-icons/gi";
import { LuBeef } from "react-icons/lu";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
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
          <div className="flex gap-1 items-center">
            <FaFish className="-mr-4" />
            <DropDown label={"Fish"} style={{ width: "150px" }}>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/fish/fish"}
                >
                  Fish
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/fish/dry-fish"}
                >
                  Dry-Fish
                </NavLink>
              </NavItem>
            </DropDown>
          </div>
          <div className="flex gap-1 items-center">
            <LuBeef className="-mr-4" />
            <DropDown label={"Meat"} style={{ width: "150px" }}>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/meat/beef"}
                >
                  Beef
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/meat/chicken"}
                >
                  Chicken
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/meat/duck"}
                >
                  Duck
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/meat/mutton"}
                >
                  Mutton
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/meat/bird"}
                >
                  Bird
                </NavLink>
              </NavItem>
            </DropDown>
          </div>
          <div className="flex gap-1 items-center">
            <GiFruitBowl className="-mr-4" />
            <DropDown label={"Fruits"} style={{ width: "200px" }}>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/fruits/local-fruits"}
                >
                  Local Fruits
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/fruits/imported-fruits"}
                >
                  Importd Fruits
                </NavLink>
              </NavItem>
            </DropDown>
          </div>
          <div className="flex gap-1 items-center">
            <FaLeaf className="-mr-4" />
            <DropDown label={"Vegetables"} style={{ width: "220px" }}>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/vegetables/local-vegetables"}
                >
                  Local Vegetables
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/vegetables/imported-vegetables"}
                >
                  Importd Vegetables
                </NavLink>
              </NavItem>
            </DropDown>
          </div>
          <div className="flex gap-1 items-center">
            <GiButter className="-mr-4" />
            <DropDown label={"Dairy"} style={{ width: "150px" }}>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/dairy/borhani"}
                >
                  Borhani
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/dairy/butter"}
                >
                  Butter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/dairy/cheese"}
                >
                  Cheese
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/dairy/curd"}
                >
                  Curd
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/dairy/ice-cream"}
                >
                  Ice Cream
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/dairy/yogurt"}
                >
                  Yogurt
                </NavLink>
              </NavItem>
            </DropDown>
          </div>
          <div className="flex gap-1 items-center">
            <GiFlatfish className="-mr-4" />
            <DropDown label={"Frozen"} style={{ width: "150px" }}>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/frozen/sea-foods"}
                >
                  Sea Foods
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/frozen/snacks"}
                >
                  Snack
                </NavLink>
              </NavItem>
            </DropDown>
          </div>
          <div className="flex gap-1 items-center">
            <MdOutlineLocalGroceryStore className="-mr-4" />
            <DropDown label={"Grocery"} style={{ width: "180px" }}>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/grocery/cookies"}
                >
                  Cookies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/grocery/biscuits"}
                >
                  Biscuit
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/grocery/candies"}
                >
                  Candie
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/grocery/rice"}
                >
                  Rice
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/grocery/sugar"}
                >
                  Sugar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/grocery/vinegar"}
                >
                  Vinegar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={"px-4 py-1 hover:bg-slate-700 hover:text-white"}
                  to={"/category/grocery/cooking-oil"}
                >
                  Cooking Oil
                </NavLink>
              </NavItem>
            </DropDown>
          </div>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Categories;
