interface InformationAndFilterTotalItemsProps {
  total: number | 0;
}

function InformationAndFilterTotalItems({
  total,
}: InformationAndFilterTotalItemsProps) {
  return <p className="my-auto">{total} Tarefas </p>;
}

export default InformationAndFilterTotalItems;
