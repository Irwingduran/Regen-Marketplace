interface CategoryCardProps {
  title: string
}

export default function CategoryCard({ title }: CategoryCardProps) {
  return (
    <div className="bg-lightPrimary rounded-lg p-4 h-36 flex items-end">
      <h3 className="text-sm font-medium text-textColor">{title}</h3>
    </div>
  )
}

