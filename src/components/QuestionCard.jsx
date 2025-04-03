import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function QuestionCard({ setAccepted, setOpen }) {
  return (
    <Card className="p-4 text-center max-w-md">
      <CardContent>
        <h2 className="text-xl font-semibold">¿Aceptas tener una cita conmigo?</h2>
        <div className="mt-4 flex justify-center gap-4">
          <Button
            className="bg-green-500 text-white"
            onClick={() => {
              setAccepted(true);
              setOpen(true);
            }}
          >
            Aceptar
          </Button>
          <Button
            className="bg-red-500 text-white"
            onClick={() => {
              setAccepted(false);
              setOpen(true);
            }}
          >
            Rechazar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}