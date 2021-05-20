import React, { useState } from "react";
import {AssessCard, AssessCardBtn} from "../components/assessmentcard";
import NavBar from "../components/NavBar";


function Assessment() {
return (
<div className="Container">
    <NavBar/>
    <AssessCard>
        <AssessCardBtn></AssessCardBtn>
    </AssessCard>
</div>
)
}
export default Assessment;