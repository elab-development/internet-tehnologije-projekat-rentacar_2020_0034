import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo, rent_a_car } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Rent_A_Car" width="50px" />
        ) : (
          <div>
            <img
              style={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Add a box shadow
              }}
              src={rent_a_car}
              alt="Rent_A_Car"
              width="195px"
            />
          </div>
        )}
      </Link>
    </Button>
  );
};


