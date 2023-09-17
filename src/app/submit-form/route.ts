// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  
  return NextResponse.json({message:'hello DevFirm Team '})
}

