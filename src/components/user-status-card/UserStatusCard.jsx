import { Box } from '@chakra-ui/layout'
import { Card } from '@chakra-ui/react'

export const UserStatusCard = ({ statusCard }) => {

	const iconMap = new Map([
		['figuritas ofrecidas', 'fa-solid fa-clipboard-user'],
		['figuritas faltantes', 'fa-solid fa-clipboard-user'],
		['puntos de venta', 'fa-solid fa-store'],
		['usuarios activos', 'fa-solid fa-user']
	])

	const iconColorMap = new Map([
		['figuritas ofrecidas', 'blue'],
		['figuritas faltantes', 'violet'],
		['puntos de venta', 'black'],
		['usuarios activos', 'black']
	])

  return (
    <div>
			<Card
				display = {'flex'}
				flexDirection = {'row'}
				width = {'80vw'}
				m = {'0.3em'}
				backgroundColor = {'var(--backgroundLoginColor)'}
				border = {'1px solid black'}
				borderRadius = {'1em'}
				justifyContent = {'center'}
				alignItems = {'center'}
				overflow = {'hidden'}
			>
				<Box 
					display = {'flex'}
					flexGrow = {1}
					p = {'0.5em'}
					fontSize = {'2.5em'}
					justifyContent = {'center'}
					alignItems = {'center'}
				>
					<Box className = { iconMap.get(statusCard.name) } color = { iconColorMap.get(statusCard.name) } />
				</Box>
				<Box 
					display = {'flex'}
					flexDirection = {'column'}
					flexGrow = {3}
					p = {'0.2em 0.3em'}
					fontSize = {'1em'}
				>
					<Box
						display = {'flex'}
						fontSize = {'2.5em'}
						fontWeight={'bolder'}
						justifyContent = {'center'}
						alignItems = {'center'}
					>{ statusCard.amount }</Box>
					<Box
						display = {'flex'}
						fontWeight = {'bold'}
						justifyContent = {'center'}
						alignItems = {'flex-end'}
					>{ statusCard.name }</Box>
				</Box>
			</Card>
		</div>
  )
}