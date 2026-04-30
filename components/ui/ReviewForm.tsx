"use client";

import { useActionState, useRef, useEffect } from "react";
import { createReviewAction } from "@/app/actions/reviews";

interface ReviewFormProps {
  cityId: number;
}

const initialState = { error: null };

export function ReviewForm({ cityId }: ReviewFormProps) {
  const boundAction = createReviewAction.bind(null, cityId);
  const [state, formAction, isPending] = useActionState(boundAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.error && !isPending) {
      formRef.current?.reset();
    }
  }, [state, isPending]);

  return (
    <form ref={formRef} action={formAction} className="mt-4">
      <textarea
        name="content"
        rows={3}
        maxLength={500}
        placeholder="이 도시에서의 경험을 공유해 주세요. (최대 500자)"
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        required
      />
      {state.error && (
        <p className="mt-1 text-xs text-red-500">{state.error}</p>
      )}
      <div className="flex justify-end mt-2">
        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 disabled:opacity-60 transition-colors"
        >
          {isPending ? "등록 중…" : "후기 등록"}
        </button>
      </div>
    </form>
  );
}
