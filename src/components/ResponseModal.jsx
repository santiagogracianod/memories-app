import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export default function ResponseModal({ open, setOpen, accepted }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{accepted ? "Detalles de la cita" : "¡Oh no!"}</DialogTitle>
        </DialogHeader>
        {accepted ? (
          <p className="text-center">Lleva ropa cómoda, una manta y muchas ganas de pasarla bien. ¡Nos vemos a las 6PM en el parque! 💖</p>
        ) : (
          <p className="text-center">Vamos, sabes que quieres decir que sí... inténtalo otra vez. 😜</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
