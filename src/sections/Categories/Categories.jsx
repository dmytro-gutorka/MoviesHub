import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {

    const categoryItems = [
        {
            title: 'Action',
            images: [
                '/src/assets/images/categories/action/1.jpg',
                '/src/assets/images/categories/action/2.jpg',
                '/src/assets/images/categories/action/3.jpg',
                '/src/assets/images/categories/action/4.jpg',
            ]
        },
        {
            title: 'Action',
            images: [
                '/src/assets/images/categories/action/1.jpg',
                '/src/assets/images/categories/action/2.jpg',
                '/src/assets/images/categories/action/3.jpg',
                '/src/assets/images/categories/action/4.jpg',
            ]
        },
        {
            title: 'Action',
            images: [
                '/src/assets/images/categories/action/1.jpg',
                '/src/assets/images/categories/action/2.jpg',
                '/src/assets/images/categories/action/3.jpg',
                '/src/assets/images/categories/action/4.jpg',
            ]
        },
        {
            title: 'Action',
            images: [
                '/src/assets/images/categories/action/1.jpg',
                '/src/assets/images/categories/action/2.jpg',
                '/src/assets/images/categories/action/3.jpg',
                '/src/assets/images/categories/action/4.jpg',
            ]
        },
        {
            title: 'Action',
            images: [
                '/src/assets/images/categories/action/1.jpg',
                '/src/assets/images/categories/action/2.jpg',
                '/src/assets/images/categories/action/3.jpg',
                '/src/assets/images/categories/action/4.jpg',
            ]
        }
    ]

    return (
        <Section
        title="Explore our wide variety of categories"
        titleId="categories-title"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        isActionsHiddenOnMobile
        actions={(
                <div>
                    <button>next</button>
                    <button>prev</button>
                </div>
            )}
        >
            {categoryItems.map((categoryItem) => (
                <CategoryCard {...categoryItem}/>
            ))}
        </Section>
    )
}

export default Categories