import Link from "next/link";
import {
  getReservationById,
  verifyReservation,
} from "../../../../sanity/sanity-utils";
import { notFound } from "next/navigation";
import { Verified } from "@/components/component/verified";



type Props = {
  params: {
    id: string;
  };
};

const Verify: React.FC<Props> = async ({ params }) => {
  const { id } = params;

  const exist = await getReservationById(id);

  if (!exist) {
    return notFound();
  }

  const verified = await verifyReservation(id);

  if (!verified) {
    return <div>error, please reload!</div>;
  }

  return (
    <div>
      <Verified/>
    </div>
  );
};

export default Verify;
