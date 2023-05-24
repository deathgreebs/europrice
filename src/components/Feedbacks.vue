<template>
    <div class="flex flex-col justify-center items-center w-[300px] lg:w-[600px] mx-auto mb-[50px] mt-[160px]">
        <div class="text-[25px] lg:text-[32px] font-bold font-montserrat uppercase mb-4">{{ $t('feedbacks-head') }}</div>
        <div class="text-[15px] lg:text-[20px] text-center font-open-sans">{{ $t('feedbacks-descr') }}</div>
    </div>
    <div class="flex justify-around flex-wrap flex-col lg:flex-row ">
        <div class="my-4 bg-[#FCFCFC] px-[10px] py-[30px] lg:px-[20px] md:py-[50px] mx-4 lg:mx-0 flex flex-col items-center border-b-[10px] border-b-solid border-[#70CACD] shadow rounded-[20px]" style="box-shadow: 35px 30px 50px rgba(188, 229, 230, 0.2);">
            <div class="avatar">
                <div class="w-[56px] rounded-full">
                    <img src="../assets/img/Photo.png" />
                </div>
            </div>
            <div class="font-open-sans font-bold my-2 lg:text-[20px]">{{ $t('feedback-1-title') }}</div>
            <div class="rating rating-lg rating-half w-[127px] mb-2">
                <input type="radio" disabled name="rating-10" class="rating-hidden" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled class="bg-[#FAC016] mask mask-star-2 mask-half-2"/>
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
            </div>
            <div class="lg:w-[360px] text-center font-montserrat text-[15px] lg:text-[16px]">{{ $t('feedback-1-subtitle') }}</div>
        </div>
        <div class="my-4 bg-[#FCFCFC] px-[10px] py-[30px] lg:px-[20px] md:py-[50px] mx-4 lg:mx-0 flex flex-col items-center border-b-[10px] border-b-solid border-[#70CACD] shadow rounded-[20px]" style="box-shadow: 35px 30px 50px rgba(188, 229, 230, 0.2);">
            <div class="avatar">
                <div class="w-[56px] rounded-full">
                    <img src="../assets/img/Photo-1.png" />
                </div>
            </div>
            <div class="font-open-sans font-bold my-2 text-[20px]">{{ $t('feedback-2-title') }}</div>
            <div class="rating rating-lg rating-half w-[127px] mb-2">
                <input type="radio" disabled name="rating-10" class="rating-hidden" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled class="bg-[#FAC016] mask mask-star-2 mask-half-2" checked/>
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
            </div>
            <div class="lg:w-[360px] text-center font-montserrat text-[15px] lg:text-[16px]">
                {{ $t('feedback-2-subtitle') }}
            </div>
        </div>
        <div class="my-4 bg-[#FCFCFC] px-[10px] py-[30px] lg:px-[20px] md:py-[50px] mx-4 lg:mx-0 flex flex-col items-center border-b-[10px] border-b-solid border-[#70CACD] shadow rounded-[20px]" style="box-shadow: 35px 30px 50px rgba(188, 229, 230, 0.2);">
            <div class="avatar">
                <div class="w-[56px] rounded-full">
                    <img src="../assets/img/Photo-2.png" />
                </div>
            </div>
            <div class="font-open-sans font-bold my-2 text-[20px]">{{ $t('feedback-3-title') }}</div>
            <div class="rating rating-lg rating-half w-[127px] mb-2">
                <input type="radio" disabled name="rating-10" class="rating-hidden" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2"/>
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-1" />
                <input type="radio" disabled name="rating-10" class="bg-[#FAC016] mask mask-star-2 mask-half-2" />
            </div>
            <div class="lg:w-[360px] text-center font-montserrat text-[15px] lg:text-[16px]">
                {{ $t('feedback-3-subtitle') }}
            </div>
        </div>
    </div>
</template>