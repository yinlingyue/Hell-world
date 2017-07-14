$(function(){
	$.ajax({
			type:"get",
			url:"json/mall.json",
			async:true,
			success:function(res){
				var html = "";
				for(var i in res){
					//页面信息加载

						var child = res[i].list;
						var nav = res[i].nav;

						html+= `<div class="storeBranch1 floor">	
									<div class="storeBranch">
										<div class="headline">	
											<a class="biaoti" href="###"><strong>${res[i].name}</strong></a>
											<div class="left">
												<span><a href="###">${nav.a}</a></span>
												<span><a href="###">${nav.b}</a></span>
												<span><a href="###">${nav.c}</a></span>
												<span><a href="###">${nav.d}</a></span>
												<span><a href="###">${nav.e}</a></span>
												<span><a href="###">${nav.f}</a></span>
												<span><a href="###">${nav.g}</a></span>
											</div>
											<div class="right">
												<a href="###">更多${res[i].name}></a>
											</div>
										</div>
										<div class="branchCon">
											<div class="item1">
												<a href="###"><img src="images/${child[0].src}" alt=""></a>
												<div class="item1Con">
													<h2><a href="###">${child[0].remark1}</a></h2>
													<h3><a href="###">${child[0].remark2}</a></h3>
												</div>
											</div>
											<div class="item2">
												<a href="###">
													<img src="images/${child[1].src}" alt="">
													<div class="box">
														<h2>${child[1].name}</h2>
														<h3>${child[1].price}</h3>
													</div>
												</a>
											</div>
											<div class="item3">
												<ul class="item33">
													<li>
														<a href="###">
															<img src="images/${child[2].src}" alt="">
															<div class="box">
																<h2>${child[2].name}</h2>
																<h3>${child[2].price}</h3>
															</div>
														</a>
													</li>
													
													<li>
														<a href="###">
															<img src="images/${child[3].src}" alt="">
															<div class="box">
																<h2>${child[3].name}</h2>
																<h3>${child[3].price}</h3>
															</div>
														</a>
													</li>

													<li>
														<a href="###">
															<img src="images/${child[4].src}" alt="">
															<div class="box">
																<h2>${child[4].name}</h2>
																<h3>${child[4].price}</h3>
															</div>
														</a>
													</li>

													<li>
														<a href="###">
															<img src="images/${child[5].src}" alt="">
															<div class="box">
																<h2>${child[5].name}</h2>
																<h3>${child[5].price}</h3>
															</div>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>`
					
				}
				$(".storeBranch1").after(html);
			}
		})










})