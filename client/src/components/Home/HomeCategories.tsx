import React from 'react'
import { Link } from 'react-router-dom';
import { categoriesData } from '../../assets/assets';


const HomeCategories = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-zinc-900">Browse Categories</h2>
                        <p className="text-sm text-app-text-light mt-1">Find exactly what you need using</p>
                    </div>

                </div>

                <div className="flex items-center mt-8 overflow-x-scroll no-scrollbar">
                    {categoriesData.map((cat) => (
                        <Link
                            key={cat.slug}
                            to={`/products?category=${cat.slug}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="group flex flex-col items-center gap-3 p-4 shrink-0"
                        >
                            <div className="size-18 sm:size-26 sm:p-2 rounded-2xl overflow-hidden bg-orange-100 group-hover:ring-2 ring-orange-300/75 transition-all">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-contain rounded-full transition-all"
                                />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-zinc-700 group-hover:text-app-green transition-colors">
                                {cat.name}
                            </span>
                        </Link>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default HomeCategories;