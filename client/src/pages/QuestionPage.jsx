import React, { useEffect } from 'react'
import QuestionCard from '../components/ui/QuestionCard';

const problems = [
  { id: "1", quest: "Find the largest number in an array." },
  { id: "2", quest: "Reverse an array without using reverse() function." },
  { id: "3", quest: "Return all even numbers from an array." },
  { id: "4", quest: "Count how many times each element appears in an array." },
  { id: "5", quest: "Remove duplicates from an array (without Set)." },
  { id: "6", quest: "Find the second largest number in an array." },
  { id: "7", quest: "Check if an array is sorted in ascending order." },
  { id: "8", quest: "Merge two arrays and remove duplicates." },
  { id: "9", quest: "Move all zeros in an array to the end." },
  { id: "10", quest: "Rotate an array by k steps." },
  { id: "11", quest: "Find the missing number in 1 to n array." },
  { id: "12", quest: "Find the intersection of two arrays." },
  { id: "13", quest: "Return the sum of all positive numbers in an array." },
  { id: "14", quest: "Find all pairs in array whose sum = target." },
  { id: "15", quest: "Flatten a 2D array into a 1D array." },
  { id: "16", quest: "Find the longest word in an array of strings." },
  { id: "17", quest: "Find the frequency of a given element in an array." },
  { id: "18", quest: "Return elements that appear only once in array." },
  { id: "19", quest: "Find the product of all numbers except itself for each index." },
  { id: "20", quest: "Chunk an array into smaller arrays of size k." }
];



function QuestionPage() {
  useEffect(()=>{
  console.log(problems.length);
  
},[])
  return (
    <section id='quest-page' className='w-full scroll-hidden h-screen overflow-y-auto flex flex-col gap-10'>
      {
        problems.map((quest,idx)=>
          <QuestionCard key={quest.quest} problem={quest} sNum={idx+1} />
        )
      }
    </section>
  )
}

export default QuestionPage