import { AiOutlineExpandAlt, AiOutlineShrink } from 'react-icons/ai'

import { IconButton, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'



const ExpandButton = ({ drawerWidthState, setDrawerWidthState }) => {
	const theme = useTheme()

	
	return (
		<Tooltip
			title={drawerWidthState === 'collapsed' ? 'Expand' : 'Collapse'}
			arrow
			disableInteractive
		>
			<IconButton
				aria-label="ExpandCollapse"
				color="primary"
				edge="end"
				size="large"
				onClick={(e) => {
					drawerWidthState === 'collapsed' ? setDrawerWidthState('expand') : setDrawerWidthState('collapsed')
				}}
				sx={{
					position: 'fixed',
					top: '5px',
					right: '10px'
				}}
			>
				{drawerWidthState === 'collapsed' ? (
					<AiOutlineExpandAlt  />
				) : (
					<AiOutlineShrink  />
				)}
			</IconButton>
		</Tooltip>
	)
}

export default ExpandButton
