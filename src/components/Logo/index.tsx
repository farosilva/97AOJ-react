import LogoPNG from '../../assets/logoipsum-418.png'

interface LogoProps {
    width?: number
    height?: number
}

export function Logo({ width = 120, height }: LogoProps) {
    return (
        <img 
            src={LogoPNG}
            alt='Logotipo da LogoIpsun'
            width={width}
            height={height}
            loading='eager'
        />
    )
}