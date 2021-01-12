import React from 'react';

function DelegateDetails() {

    const poolToolLink = "https://pooltool.io/pool/9d217694cd5d60a46d5e49b13e665d05efb0e433d62ee560eab027c1/";
    const adaPoolsLink = "https://adapools.org/pool/9d217694cd5d60a46d5e49b13e665d05efb0e433d62ee560eab027c1";

    // add link to Cardano24

    return (

        <div class="container">
            
                <div class="row mt-5 mb-5">
                    <div class="col-md-1 ml-md-3"></div>
                    <div class="col">
                        <h1 class="delegate-details">What is Delegation?</h1>
                        <p class="delegate-details">When you stake your ADA to a Cardano Stake Pool, you claim your role as a part-owner of this new, global, financial infrastructure. Staking to ZOE, or any other pool, represents your active "vote" on how globally decentralized our living network is and will be.</p>
                        <h1 class="delegate-details">Transparency</h1>
                        <p class="delegate-details">We would like to keep the waters of our pool as clear as possible where we see fit and in doing so ZOEPOOL will provide its delegators with access to a detailed activity report and monthly updates when we reach a more sustainable delegation to support our activities.</p>
                        <p class="delegate-details">We’d like to take this moment to thank Cardano24 Pool [pool ticker: ADA] for providing support in the setting-up process of this stakepool. We’d also like to give a special shoutout to April aka Mama ZOE whose story and journey into the Cardano blockchain ecosystem very much inspired this stakepool.</p>
                        <ul>
                            <li><a href={poolToolLink} class="delegate-details" target="blank">View ZOE POOL on pooltool.io</a></li>
                            <li><a href={adaPoolsLink} class="delegate-details" target="blank">View ZOE POOL on adapools.org</a></li>
                        </ul>
                        <h1 class="delegate-details">Pool Costs</h1>
                        <p class="delegate-details">Our mainnet infrastructure will cost us approximately 60$ a month. Organizing a meet-up with around 20 participants, costs around $350$, which includes renting the place where the meet-up is hosted, drinks, as well as some additional costs e.g publicity, swags, Tees. </p>
                        <h1 class="delegate-details">Infrastructure</h1>
                        <p class="delegate-details">Our Cardano-Nodes currently run on:</p>
                        <ul>
                            <li class="delegate-details">Intel® Xeon® Gold CPUs</li>
                            <li class="delegate-details">16 GB ECC RAM</li>
                            <li class="delegate-details">HA/HP NVMe-SSD Storage-Arrays</li>
                            <li class="delegate-details">1Gbit/s Uplinks in a DDOS-Protected Network</li>
                        </ul>
                    </div>
                </div>
        </div>

    )
}


export default DelegateDetails
