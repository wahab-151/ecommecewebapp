import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const CartProduct = ({ image, p_name, desc,quantity,price ,productId,handleOndeleteItem=()=>{}}) => {
  
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr 1fr 1fr",
        alignItems:"center",
        padding:2
       
      }}
    >
      <Box sx={{ display: "flex", gap: 3,alignItems:"center", }}>
        <Box sx={{ width: "116px", height: "116px" }}>
          <img src={image} alt="product name" width="100%" height="100%" />
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: (theme) => theme.palette.secondary.main,
              textAlign:"center"
            }}
          >
            {p_name}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
         
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            textAlign: "right",
            marginRight:5
          }}
        >
         {price} RS
        </Typography>

      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            textAlign: "right",
            marginRight:5
          }}
        >
          
          {quantity} Q
        </Typography>
        
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems:"flex-end",
          flexDirection: "column",
        }}
      >
        <Button onClick={handleOndeleteItem}>
        <DeleteIcon sx={{color: (theme) => theme.palette.secondary.main,}}/>
        </Button>
      </Box>
     
    </Box>
     
  );
};

export default CartProduct;
