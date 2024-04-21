import React from "react";
import Header from "@/Components/Common/Header";
const Career = () => {
    return (
        <div>
            <Header />

            <div class="flex flex-col items-center">
                <h1 class="text-4xl font-bold mb-8">TechNext</h1>
                <p class="text-gray-500 text-lg">
                    Inspirate y crea nuevas ideas
                </p>
            </div>
            <div class="container mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <a
                        class="flex flex-col items-center bg-white shadow-md rounded-md p-7 md:p-4 mx-4"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1104/1104578.png"
                            alt=""
                            class="w-12 h-12 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                        <h2 class="text-lg md:text-xl font-bold text-center">
                            Ing.Sistemas
                        </h2>
                    </a>
                    <a
                        href="#"
                        class="flex flex-col items-center bg-white shadow-md rounded-md p-2 md:p-4 mx-4"
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLY4iW8YBMJPt5_qo6N_3hgyIhskhll0rqq1nL-himFg&s"
                            alt=""
                            class="w-12 h-12 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                        <h2 class="text-lg md:text-xl font-bold text-center">
                            Comunicacion
                        </h2>
                    </a>
                    <a
                        href="#"
                        class="flex flex-col items-center bg-white shadow-md rounded-md p-2 md:p-4 mx-4"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1104/1104578.png"
                            alt=""
                            class="w-12 h-12 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                        <h2 class="text-lg md:text-xl font-bold text-center">
                            Ing.Sistemas
                        </h2>
                    </a>
                    <a
                        href="#"
                        class="flex flex-col items-center bg-white shadow-md rounded-md p-2 md:p-4 mx-4"
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLY4iW8YBMJPt5_qo6N_3hgyIhskhll0rqq1nL-himFg&s"
                            alt=""
                            class="w-12 h-12 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                        <h2 class="text-lg md:text-xl font-bold text-center">
                            Comunicacion
                        </h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Career;
