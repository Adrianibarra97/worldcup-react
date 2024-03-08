import { useState } from "react"
import { Box } from "@chakra-ui/layout"
import { Header } from "../../components/header/Header"
import { FigurineForm } from "../../components/figurine-form/Figurine-form"
import { emptyFigurine } from "../../services/figurine/Figurine-empty"
import { figurineService } from "../../services/figurine/Figurine.service"
import { useNavigate } from "react-router-dom"

export const FigurinePageCreate = () => {
  const [figurita] = useState(emptyFigurine)
  const navigate = useNavigate()

  const publicarFigurita = async (figuritaJSON) =>{
    await figurineService.postFigurine(figuritaJSON)
    navigate("/figurines")
  }

  return (
    <div className="main">
      <Header text="Crear figurita"></Header>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        backgroundColor="var(--backgroundColor)"
        height="79vh"
        p={5}
      >
        <FigurineForm figuritaToShow={figurita} guardar={publicarFigurita} editable={true}></FigurineForm>
      </Box>
    </div>
  )
}
