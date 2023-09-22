export const Footer = ({porcentaje}) => {
    //console.log(porcentaje)
    return (
        <>
            <div className="container fixed-bottom progress mb-1">
                <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${porcentaje * 100}%`}} aria-valuenow={porcentaje*100} aria-valuemin="0" aria-valuemax="100">{Math.floor(porcentaje*100)}%</div>
            </div>
        </>
    )
}